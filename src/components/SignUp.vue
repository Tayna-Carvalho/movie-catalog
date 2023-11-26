<template>
  <section class="signUp">
    <h2>Insira seus dados de cadastro</h2>
    <input
      type="text"
      placeholder="Nome"
      v-model="this.user.name" />
    <input
      type="text"
      placeholder="E-mail"
      v-model="this.user.email" />
    <input
      type="text"
      placeholder="Senha"
      v-model="this.user.password" />
    <button @click="addUser">entrar</button>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'sign-in-component',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    addUser() {
      axios
        .post('http://localhost:8800/', {
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
        })
        .then(({ data }) => {
          window.alert(data);
        })
        .catch(({ data }) => window.alert(data));
    },
  },
};
</script>

<style>
.sign .box .content .signUp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
}
</style>
