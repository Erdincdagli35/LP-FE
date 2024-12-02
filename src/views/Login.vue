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
  justify-content: center;
  height: 80vh;
  background: #f4f4f9;
  font-family: 'Arial', sans-serif;
}

.login-header {
  text-align: center;
  margin-bottom: 40px;
}

h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin: 0;
}

.subheading {
  font-size: 1.2rem;
  color: #7f8c8d;
}

.login-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

/* Modern Textbox Styles */
input[type="email"], input[type="password"] {
  width: 100%;
  padding: 14px 20px;
  font-size: 1.1rem;
  margin-bottom: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  box-sizing: border-box;
}

input[type="email"]:focus, input[type="password"]:focus {
  border-color: #3498db;
  outline: none;
  box-shadow: 0 0 8px rgba(52, 152, 219, 0.5);
}

input[type="email"], input[type="password"]::placeholder {
  color: #b5b5b5;
}

/* Modern Login Button */
button[type="submit"] {
  width: 100%;
  padding: 14px 20px;
  font-size: 1.2rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-sizing: border-box;
}

button[type="submit"]:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

button[type="submit"]:active {
  transform: translateY(2px);
}

/* Link Style */
.btn-link {
  color: #3498db;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.btn-link:hover {
  color: #2980b9;
  text-decoration: underline;
}
</style>
