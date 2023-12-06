<template>
  <section class="signUp">
    <h2>Insira seus dados de cadastro</h2>
    <input
      class="userInput"
      type="text"
      placeholder="Nome"
      v-model="this.user.name" />
    <input
      class="userInput"
      type="text"
      placeholder="E-mail"
      v-model="this.user.email" />
    <input
      class="userInput"
      type="text"
      placeholder="Senha"
      v-model="this.user.password" />
    <button
      class="userBtn"
      @click="addUser()">
      Cadastrar
    </button>
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
        .post('http://localhost:8800/user', {
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
        })
        .then(({ data }) => {
          window.alert(data);
        })
        .catch(() => window.alert('Falha ao cadastrar usuário'));
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
