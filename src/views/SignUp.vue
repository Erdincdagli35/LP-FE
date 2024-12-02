<template>
  <div>
    <SignUpForm />
  </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm.vue';

export default {
  name: 'UserSignUpForm',
  components: {
    SignUpForm,
  },
};
</script>

<style scoped>
h2 {
  color: #4CAF50;
}
</style>
