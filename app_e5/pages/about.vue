<template>
    <div class="profile">
      <div class="profile-image">
        <img :src="profileImage" alt="Profile Picture" />
      </div>
      <div class="profile-details">
        <h1>{{ name }}</h1>
        <p>{{ bio }}</p>
        <!-- <button class="contact-btn">Contact Me</button> -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profileImage: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-6/301116052_3205571589681614_8569585813237181990_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEi1DSnx6JDGiTvzfKCNMj9Qk7vZKPoQpRCTu9ko-hClIANsB9PYBvlIH_NnBws2jvXkhcLmloehnTay0i2Mjvs&_nc_ohc=2-Aa-uFKP0cQ7kNvgGWCKuu&_nc_ht=scontent.fbkk7-2.fna&oh=00_AYAcezbQboZPKh6F6rONw3NleT1GGHqsDbIxuNTFPQyyTw&oe=66D352AD',
        name: 'นายธนัท มิตรสันเทียะ',
        bio: 'สวัสดีฉันหลงใหลในเทคโนโลยี นวัตกรรม และการเรียนรู้อย่างต่อเนื่อง ปัจจุบันฉันกำลังศึกษาหลักสูตร IT E5 ที่วิทยาลัยเทคนิคชัยภูมิ ซึ่งฉันกำลังพัฒนารากฐานที่มั่นคงในด้านต่างๆ ของเทคโนโลยีสารสนเทศและการพัฒนาซอฟต์แวร์ เส้นทางการศึกษาของฉันได้จุดประกายความอยากรู้อยากเห็นและความทะเยอทะยานของฉันในการสำรวจว่าจะนำเทคโนโลยีมาใช้เพื่อแก้ปัญหาในโลกแห่งความเป็นจริงได้อย่างไร',
      };
    },
  };
  </script>
  
  <style scoped>
  .profile {
    display: flex;
    align-items: center;
    padding: 20px;
    border: 2px solid #0066cc;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: #f0f8ff;
    max-width: 700px;
    margin: 20px auto;
    transition: transform 0.3s ease-in-out;
  }
  
  .profile:hover {
    transform: scale(1.02);
  }
  
  .profile-image img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-right: 30px;
    border: 3px solid #0066cc;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .profile-details h1 {
    margin: 0;
    font-size: 2.5em;
    color: #0066cc;
    font-family: 'Arial', sans-serif;
  }
  
  .profile-details p {
    margin: 10px 0 20px;
    font-size: 1.2em;
    color: #333;
    font-family: 'Verdana', sans-serif;
  }
  
  /* .contact-btn {
    padding: 10px 20px;
    background-color: #0066cc;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  } */
  
  .contact-btn:hover {
    background-color: #0055aa;
  }
  </style>
  