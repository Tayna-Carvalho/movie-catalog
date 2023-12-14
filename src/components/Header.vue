<template>
  <header>
    <div class="container">
      <img
        class="logoutIcon"
        src="../assets/logout-icon-white.svg"
        alt="Log out"
        @click="logOut()" />
    </div>
  </header>
  <router-view />
</template>

<script>
export default {
  name: 'header-component',
  data() {
    return {
      selected: 1,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('logOut');
      this.$router.push('/entrar');
    },
  },
};
</script>

<style>
header .container {
  height: 64px;
  display: flex;
  justify-content: space-between;
  justify-content: flex-end;
}
header {
  margin: 0;
  background: linear-gradient(180deg, #1b1b1b 0%, rgba(27, 27, 27, 0) 100%);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}
.headerNavegation {
  padding-bottom: 16px;
}
.headerNavegation:hover {
  color: var(--Roxo-Claro, #ac4dff);
}
.headerNavegation:active {
  color: var(--Verde-Claro, #aaf766);
}
</style>
