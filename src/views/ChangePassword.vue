<template>
  <div>
    <ChangePasswordForm />
  </div>
</template>

<script>
import ChangePasswordForm from '@/components/ChangePasswordForm.vue';

export default {
  name: 'UserChangePasswordForm',
  components: {
    ChangePasswordForm,
  },
};
</script>

<style scoped>
h2 {
  color: #FF5722;
}
</style>
