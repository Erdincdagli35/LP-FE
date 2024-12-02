<template>
  <div class="home-container">
    <div class="home-header">
      <h1>Welcome to the User Management System</h1>
      <p class="subheading">Manage your profile, change your password, and more.</p>
    </div>
    <div class="home-actions">
      <router-link to="/login" class="btn btn-primary">Login</router-link>
      <router-link to="/signUp" class="btn btn-secondary">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f4f4f9;
  font-family: 'Arial', sans-serif;
}

.home-header {
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin: 0;
}

.subheading {
  font-size: 1.2rem;
  color: #7f8c8d;
}

.home-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn {
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover {
  background-color: #2980b9;
}

.btn-secondary {
  background-color: #2ecc71;
  color: white;
}

.btn-secondary:hover {
  background-color: #27ae60;
}
</style>
