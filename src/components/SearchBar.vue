<template>
  <form class="searchBar">
    <input
      type="text"
      placeholder="Pesquisar"
      v-model="this.query" />
    <router-link
      :to="query === '' ? '/' : '/buscar'"
      @click="searchByQuery()">
      <button :class="{ buttonDisabled: query === '' }">buscar</button>
    </router-link>
  </form>
</template>

<script>
export default {
  name: 'search-bar-component',
  data() {
    return {
      query: '',
    };
  },
  methods: {
    searchByQuery() {
      if (this.query != '') {
        this.$store.dispatch('searchByQuery', this.query);
      }
    },
  },
};
</script>

<style>
.searchBar {
  height: 64px;
  border-radius: 20px;
  border-radius: 20px;
  background: var(--Branco-transparente, rgba(255, 255, 255, 0.3));
}
::-webkit-input-placeholder {
  color: var(--cinza-claro-2, #a5a5a5);
}
.searchBar input {
  width: 605px;
  height: 100%;
  margin-left: 18px;
  padding: 0;
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
  line-height: 24px;
}
.searchBar button {
  width: 129px;
  height: 100%;
  border-radius: 0px 20px 20px 0px;
  background: var(--Roxo-Claro, #ac4dff);
  border: none;
  padding: 0;
  cursor: pointer;
}
.searchBar .buttonDisabled:hover {
  background: #d9aeff;
}
.searchBar button:hover {
  background: var(--Roxo-Escuro, #550899);
}
.searchBar button:active {
  background: var(--Verde-Claro, #aaf766);
}
</style>
