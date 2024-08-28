<template>
    <div class="contact-us">
      <h1>Contact Us</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" v-model="form.name" id="name" placeholder="Enter your name" required />
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="form.email" id="email" placeholder="Enter your email" required />
        </div>
  
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea v-model="form.message" id="message" placeholder="Your message" required></textarea>
        </div>
  
        <button type="submit">Send Message</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      submitForm() {
        console.log("Form submitted:", this.form);
        alert("Your message has been sent!");
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-us {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Arial', sans-serif;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #555;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
  }
  
  input:focus,
  textarea:focus {
    border-color: #007bff;
    outline: none;
  }
  
  textarea {
    height: 150px;
    resize: vertical;
  }
  
  button {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  