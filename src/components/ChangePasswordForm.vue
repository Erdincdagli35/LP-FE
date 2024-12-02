<template>
  <div class="form-container">
    <div class="header">
      <h1>🔒 Password Manager</h1>
      <p>Securely update your password</p>
    </div>
    <form @submit.prevent="changePassword" class="form-content">
      <div class="input-group">
        <input
          type="text"
          v-model="name"
          placeholder="Enter your username"
          class="input-field"
        />
      </div>
      <div class="input-group">
        <input
          type="password"
          v-model="oldPassword"
          placeholder="Enter old password"
          class="input-field"
        />
      </div>
      <div class="input-group">
        <input
          type="password"
          v-model="newPassword"
          placeholder="Enter new password"
          class="input-field"
        />
      </div>
      <div class="input-group">
        <input
          type="password"
          v-model="newPasswordConfirm"
          placeholder="Confirm new password"
          class="input-field"
        />
      </div>
      <button type="submit" class="submit-btn">Update Password</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      oldPassword: '',
      newPassword: '',
      newPasswordConfirm: '',
    };
  },
  methods: {
    async changePassword() {
      try {
        const payload = {
          name: this.name,
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
          newPasswordConfirm: this.newPasswordConfirm,
        };

        const response = await axios.put(
          'http://localhost:9292/user/changePassword',
          payload
        );

        console.log('Password changed successfully:', response.data);
        alert('Password updated successfully!');
        this.$router.push('/login');
      } catch (error) {
        console.error('Error changing password:', error);
        alert('Failed to change password. Please try again.');
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 420px;
  margin: 40px auto;
  padding: 30px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  text-align: center;
  font-family: 'Roboto', sans-serif;
}

.header h1 {
  font-size: 1.8rem;
  color: #ff5722;
  margin-bottom: 10px;
}

.header p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
}

.form-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input-group {
  position: relative;
}

.input-field {
  width: 90%;
  padding: 14px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: 0.3s;
}

.input-field:focus {
  border-color: #ff5722;
  box-shadow: 0 0 8px rgba(255, 87, 34, 0.4);
  outline: none;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(45deg, #ff5722, #e64a19);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease;
}

.submit-btn:hover {
  background: linear-gradient(45deg, #e64a19, #d84315);
}
</style>
