<template>
  <div class="signup-container">
    <div class="signup-form-container">
      <h1 class="header">Join Us</h1>
      <p class="subtext">Create your account and start your journey today.</p>
      <form @submit.prevent="signUpUser" class="signup-form">
        <input
          type="text"
          v-model="name"
          placeholder="Name"
          class="input-field"
          :class="{ 'input-error': errorMessage }"
        />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          class="input-field"
          :class="{ 'input-error': errorMessage }"
        />
        <button type="submit" class="submit-btn">Sign Up</button>
      </form>
      <router-link to="/changePassword" class="form-link">
        Remembered your password? Click here to login.
      </router-link>
    </div>

    <footer class="footer">
      <p>&copy; 2024 ED-Soft. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async signUpUser() {
      try {
        const response = await axios.post("http://localhost:9292/user/signUp", {
          name: this.name,
          password: this.password,
        });
        console.log(response.data);
        this.$router.push("/login");
      } catch (error) {
        console.error("Error signing up:", error);
        this.errorMessage = "Sign up failed. Please try again.";
      }
    },
  },
};
</script>

<style scoped>
.signup-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.signup-form-container {
  max-width: 400px;
  margin: auto;
  padding: 30px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.header {
  font-size: 2rem;
  color: #3498db;
  margin-bottom: 10px;
}

.subtext {
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 20px;
}

.signup-form {
  width: 100%;
}

.input-field {
  width: 90%;
  padding: 14px;
  margin: 10px 0;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input-field:focus {
  border-color: #3498db;
  box-shadow: 0 0 8px rgba(52, 152, 219, 0.5);
}

.input-error {
  border-color: red;
  background-color: #ffe6e6;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  font-size: 1.2rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
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

.form-link {
  display: inline-block;
  margin-top: 15px;
  color: #3498db;
  text-decoration: none;
  font-size: 0.9rem;
}

.form-link:hover {
  text-decoration: underline;
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
