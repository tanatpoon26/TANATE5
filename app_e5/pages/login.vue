<template>
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://media.istockphoto.com/id/491219638/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%95%E0%B9%88%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A2%E0%B8%AD%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%8A%E0%B8%B2%E0%B8%A7%E0%B8%99%E0%B8%B2%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%AA%E0%B9%8D%E0%B8%B2%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81.jpg?s=612x612&w=0&k=20&c=2o-8x4WrpCNgUYpxH5dql1ugiUt36EWnLRVifdj5i_M="
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        v-model="email"
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
         </a>
      </div>

      <v-text-field
        v-model="passwd"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card
        class="mb-12"
        color="surface-variant"
        variant="tonal"
      >
      </v-card>

      <v-btn
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        block
        @click="doLogin"
      >
        Log In
      </v-btn>

      <v-btn
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        block
        @click="goToRegister"
      >
        Register
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="reg"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
definePageMeta({
  layout: "#",
});
import axios from 'axios';

export default {
  data: () => ({
    visible: false,
    email: '',
    passwd: ''
  }),
  methods: {
    async doLogin() {
      let forms = {
        email: this.email,
        passwd: this.passwd
      };
      console.log(forms);
      const response = await axios.post('http://localhost:7000/login', forms);
      const data = response.data;
      console.log(data.status);
      if (data.status == 'success') {
        console.log(data.row.email);
        window.sessionStorage.setItem('token', JSON.stringify(data.token));
        this.$router.replace('/main');
      } else {
        this.$router.replace('/login');
      }
    },
    goToRegister() {
      this.$router.push('/reg');
    }
  }
};
</script>
