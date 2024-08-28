<template>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" md="8">
          <v-card>
            <v-img
              src="D:\API_NEW\app_e5\public\assets\images\IO.png"
              height="400px"
              contain
            ></v-img>
            <v-card-title class="title">
              <h1>ยินดีต้อนรับสู่โซลูชั่น IoT เพื่อการเกษตร</h1>
            </v-card-title>
              <p>
                นวัตกรรมสำหรับการทำฟาร์มยุคใหม่ด้วยเทคโนโลยี IoT ของเรา
                เรามีระบบที่ช่วยในการตรวจติดตามดิน วัดปริมาณน้ำ 
                <br>และควบคุมสภาพแวดล้อมเพื่อให้การเกษตรมีประสิทธิภาพสูงสุด
              </p>
              
              <v-img
                src="D:\API_NEW\app_e5\public\assets\images\4.1.png"
                height="auto"
                max-height="200px"
                contain
                class="subtitle-img"
              ></v-img>
              <p class="sensor-info">
                ด้วยระบบเซ็นเซอร์ที่ติดตั้งในดิน คุณจะสามารถตรวจสอบความชื้นและสภาพดินได้อย่างรวดเร็วและแม่นยำ
              </p>
              <v-img
                src="D:\API_NEW\app_e5\public\assets\images\4.0.jpg"
                height="auto"
                max-height="200px"
                contain
                class="subtitle-img"
              ></v-img>
              <p class="sensor-info">
                ระบบการให้น้ำอัจฉริยะช่วยให้การจัดการน้ำในฟาร์มของคุณเป็นเรื่องง่ายและสะดวกสบาย
              </p>
            <v-card-actions class="actions">
              <v-btn color="primary" @click="learnMore">
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    methods: {
      learnMore() {
        this.$router.push('/about');
      }
    }
  }
  </script>
  
  <style scoped>
  .v-card {
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    border-radius: 8px;
    background-color: #ffffff; /* Ensure background color is appropriate */
  }
  
  .v-card-title {
    background-color: #ffffff;
    text-align: center;
    padding: 16px;
  }
  
  .v-card-title h1 {
    font-size: 24px;
    margin: 0;
  }
  
  .v-card-subtitle {
    padding: 16px;
    text-align: center;
  }
  
  .v-card-subtitle p {
    font-size: 16px;
    line-height: 1.5;
    color: #333;
  }
  
  .subtitle-img {
    margin: 8px 0;
    opacity: 1; /* Ensure full opacity */
    filter: none; /* Remove any filters */
    image-rendering: auto; /* Standard rendering */
  }
  
  .v-card-actions {
    padding: 16px;
    display: flex;
    justify-content: center;
  }
  .sensor-info {
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  margin: 8px 0;
  text-align: center; /* หรือจัดการการจัดตำแหน่งตามที่ต้องการ */
}
  </style>
  