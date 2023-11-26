<template>
  <section class="login">
    <h2>Entre com seu e-mail e senha</h2>
    <input
      type="text"
      placeholder="e-mail"
      v-model="this.user.email" />
    <input
      type="text"
      placeholder="Senha"
      v-model="this.user.password" />
    <button @click="getUser()">entrar</button>
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
