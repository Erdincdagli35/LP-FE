<template>
  <div class="login-container">
    <div class="login-form-container">
      <h2>Login to LMS</h2>
      <form @submit.prevent="loginUser" class="login-form">
        <input 
          type="text" 
          v-model="name" 
          placeholder="Username" 
          class="input-field"
          :class="{'input-error': errorMessage}"
        />
        <input 
          type="password" 
          v-model="password" 
          placeholder="Password" 
          class="input-field"
          :class="{'input-error': errorMessage}"
        />
        <button type="submit" class="submit-btn">Login</button>
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
    <router-link to="/signUp" class="form-link">
        Do you have an account? 
      </router-link>

    <footer class="footer">
      <p>&copy; 2024 ED-Soft. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',         // Kullanıcı adı alanı
      password: '',     // Şifre alanı
      errorMessage: '', // Hata mesajları için
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post('http://localhost:9292/user/login', {
          name: this.name,      
          password: this.password,
        });
        console.log(response.data);

        localStorage.setItem('userName',this.name);

        // Başarılı giriş sonrası yönlendirme
        this.$router.push({ name: 'Success' }); // Veya istediğiniz başka bir sayfaya yönlendirebilirsiniz
        
      } catch (error) {
        console.error('Error logging in:', error);

      if (error.response) {
        if (error.response.status === 404) {
          this.errorMessage = 'Kullanıcı adı veya şifre yanlış. Lütfen tekrar deneyin.';
        } else {
          this.errorMessage = 'Giriş sırasında bir hata oluştu. Lütfen tekrar deneyin.';
        }
      } else {
        this.errorMessage = 'Sunucuya bağlanılamadı. Lütfen internet bağlantınızı kontrol edin.';
      }
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.banner {
  background-color: #3498db;
  color: white;
  padding: 40px;
  text-align: center;
  flex: 0 1 30%;
  border-radius: 8px 8px 0 0;
}

.banner h1 {
  font-size: 2.5rem;
  margin: 0;
}

.banner p {
  font-size: 1.2rem;
  margin-top: 10px;
}

.login-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 20px;
}

.login-form {
  width: 100%;
}

.input-field {
  width: 90%;
  padding: 14px 20px;
  font-size: 1.1rem;
  margin-bottom: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input-field:focus {
  border-color: #3498db;
  outline: none;
  box-shadow: 0 0 8px rgba(52, 152, 219, 0.5);
}

.input-error {
  border-color: red;
  background-color: #ffe6e6;
}

.submit-btn {
  width: 100%;
  padding: 14px 20px;
  font-size: 1.2rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.submit-btn:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.submit-btn:active {
  transform: translateY(2px);
}

.error-message {
  color: red;
  font-size: 1rem;
  margin-top: 10px;
}

.footer {
  text-align: center;
  padding: 15px;
  background-color: #f4f4f9;
  margin-top: auto;
}

.footer p {
  font-size: 0.9rem;
  color: #7f8c8d;
}
</style>
