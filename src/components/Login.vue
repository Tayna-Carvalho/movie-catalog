<template>
  <section class="login">
    <h2>Entre com seu e-mail e senha</h2>
    <input
      class="userInput"
      type="text"
      placeholder="e-mail"
      v-model="this.user.email" />
    <input
      class="userInput"
      type="text"
      placeholder="Senha"
      v-model="this.user.password" />
    <button
      class="userBtn"
      @click="getUser()">
      entrar
    </button>
  </section>
</template>

<script>
export default {
  name: 'login-component',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    getUser() {
      this.$store.dispatch('getUser', this.user);
    },
  },
};
</script>

<style>
.sign .box .content .login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
}
</style>
