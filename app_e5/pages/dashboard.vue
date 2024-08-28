<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-4">
          <v-card-title>
            <h1 :title="id" class="title">{{ msg || 'MQTT Dashboard' }}</h1>
          </v-card-title>
          <v-card-subtitle>
            <h2 :class="isConnected ? 'connected-text' : 'disconnected-text'">
              {{ status }}
            </h2>
          </v-card-subtitle>

          <v-card-text>
            <v-row justify="center">
              <v-btn
                class="ma-2"
                color="green"
                @click="connect"
                v-if="!isConnected"
              >
                <span class="button-text">Connect</span>
                <v-icon icon="mdi-link" end></v-icon>
              </v-btn>

              <v-btn
                class="ma-2"
                color="red"
                @click="disconnect"
                v-if="isConnected"
              >
                <span class="button-text">Disconnect</span>
                <v-icon icon="mdi-link-off" end></v-icon>
              </v-btn>
            </v-row>

            <v-row justify="center" class="text-center mt-4">
              <v-col cols="6">
                <h1>Temp</h1>
                <v-progress-circular
                  :model-value="value"
                  :rotate="360"
                  :size="100"
                  :width="15"
                  color="teal"
                >
                  <template v-slot:default> {{ value }} % </template>
                </v-progress-circular>
              </v-col>

              <v-col cols="6">
                <h1>Humi</h1>
                <v-progress-circular
                  :model-value="value1"
                  :rotate="360"
                  :size="100"
                  :width="15"
                  color="red"
                >
                  <template v-slot:default> {{ value1 }} % </template>
                </v-progress-circular>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions class="justify-center">
            <v-text-field v-model="id" label="Enter ID" type="text"></v-text-field>
            <v-btn color="primary" @click="add">CLICK</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import mqtt from "mqtt";

export default {
  layout: "default", // ดึง layout default มาใช้
  data() {
    return {
      id: 10,
      name: "hello",
      msg: "",
      sw: "",
      status: "Disconnected",
      value: 12,
      value1: 60,
      isConnected: false,
      client: null,
    };
  }, // data

  methods: {
    add() {
      let sw = this.id++;
      this.value = sw;
      this.client.publish("room1/sw01", String(sw));
    }, // add

    connect() {
      this.client = mqtt.connect("ws://broker.emqx.io:8083/mqtt");
      this.client.on("connect", this.onMqttConnect);
      this.client.on("message", this.onMqttMessage);
      this.client.on("reconnect", this.handleOnReConnect);
      this.client.on("close", this.onMqttClose);
    }, // connect

    disconnect() {
      if (this.client) {
        this.client.end();
        this.isConnected = false;
        this.status = "Disconnected";
        this.msg = "";
        this.id = 10;
        this.value = 12;
        this.value1 = 60;
      }
    }, // disconnect

    onMqttConnect() {
      this.isConnected = true;
      this.status = "Mqtt connected";
      this.client.publish("op", "status");
      this.client.subscribe("status", (err) => err && console.error(err));
      this.client.subscribe("room1/sw01", (err) => err && console.error(err));
    }, // onMqttConnect

    onMqttMessage(topic, message) {
      if (topic === "status") {
        this.msg = message.toString();
      }
      if (topic === "room1/sw01") {
        this.value = Number(message.toString());
      }
    }, // onMqttMessage

    handleOnReConnect() {
      this.retryTimes += 1;
      if (this.retryTimes > 5) {
        try {
          this.client.end();
          this.status = "Mqtt Disconnected";
          this.isConnected = false;
        } catch (error) {
          console.error("Connection failed", error);
          this.status = "Mqtt Disconnected";
        }
      }
    }, // handleOnReConnect

    onMqttClose() {
      this.isConnected = false;
      this.status = "Disconnected";
    }, // onMqttClose
  }, // methods

  beforeDestroy() {
    this.disconnect();
  }, // beforeDestroy
};
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 2em;
}

.connected-text {
  color: green;
  font-weight: bold;
  font-size: 1.5em;
}

.disconnected-text {
  color: red;
  font-weight: bold;
  font-size: 1.5em;
}

.button-text {
  font-size: 1.2em;
  font-weight: bold;
}
</style>
