<template>
  <div class="login-container">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'UserLogin',
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Dikey olarak ortala */
  height: 100vh; /* Tüm ekran yüksekliğini kapla */
  background: #f4f4f9; /* Arka plan rengi */
  font-family: 'Arial', sans-serif;
}

.login-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  width: 100%; 
  margin: 0 auto;
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

.login-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.input-field {
  width: 100%;
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
  margin-top: 20px;
}

.footer p {
  font-size: 0.9rem;
  color: #7f8c8d;
}

</style>
