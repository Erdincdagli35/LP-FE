<template>
  <div class="success-container">
    <h1>Login Successful!</h1>
    <p>Welcome to LMS, {{ userName }}! You will be redirected shortly...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '', // Kullanıcı adı
    };
  },
  mounted() {
    // Kullanıcı adını localStorage'dan al
    this.userName = localStorage.getItem('userName');

    // Otomatik yönlendirme için timeout
    setTimeout(() => {
      //this.$router.push({  }); // LMS sayfasına yönlendirme
    }, 3000);
  },
};
</script>

<style scoped>
.success-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ecf0f1;
  color: #2c3e50;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #27ae60;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  color: #7f8c8d;
}
</style>
