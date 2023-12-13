<template>
  <header>
    <div class="container">
      <section class="leftContent">
        <section class="logotype">
          <img
            src="../assets/logo-name-white.svg"
            alt="logotype" />
        </section>
        <nav>
          <ul>
            <li>
              <h3>
                <router-link
                  class="headerNavegation"
                  to="/"
                  @click="selected = 1"
                  :class="{ routerLinkSelected: selected === 1 }">
                  Início
                </router-link>
              </h3>
            </li>
            <li>
              <h3>
                <router-link
                  class="headerNavegation"
                  to="/filmes"
                  @click="selected = 2"
                  :class="{ routerLinkSelected: selected === 2 }">
                  Filmes
                </router-link>
              </h3>
            </li>
            <li>
              <h3>
                <router-link
                  class="headerNavegation"
                  to="/series"
                  @click="selected = 3"
                  :class="{ routerLinkSelected: selected === 3 }">
                  Séries
                </router-link>
              </h3>
            </li>
            <li>
              <h3>
                <router-link
                  class="headerNavegation"
                  to="/favoritos"
                  @click="selected = 4"
                  :class="{ routerLinkSelected: selected === 4 }">
                  Favoritos
                </router-link>
              </h3>
            </li>
            <li>
              <h3>
                <router-link
                  class="headerNavegation"
                  to="/assistidos"
                  @click="selected = 5"
                  :class="{ routerLinkSelected: selected === 5 }">
                  Assistidos
                </router-link>
              </h3>
            </li>
          </ul>
        </nav>
      </section>
      <section class="rightContent">
        <MinimalistSearchBar></MinimalistSearchBar>
        <h3 v-if="user.id === ''">
          <router-link
            class="headerNavegation"
            to="/entrar"
            >Entrar</router-link
          >
        </h3>
        <img
          class="logoutIcon"
          src="../assets/logout-icon-white.svg"
          alt="Log out"
          @click="logOut()"
          v-else />
      </section>
    </div>
  </header>
  <router-view />
</template>

<script>
import MinimalistSearchBar from '@/components/MinimalistSearchBar.vue';
export default {
  name: 'header-component',
  components: { MinimalistSearchBar },
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
    },
  },
};
</script>

<style>
header .container {
  height: 64px;
  display: flex;
  justify-content: space-between;
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
header .container .leftContent {
  display: flex;
  align-items: center;
  gap: 23px;
}
header .container .rightContent {
  display: flex;
  align-items: center;
  gap: 83px;
}
header .container .leftContent .logotype {
  width: 127px;
  height: 30px;
  flex-shrink: 0;
}
header .container .leftContent ul {
  display: flex;
  width: 583px;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.routerLinkSelected {
  border-bottom: 4px solid var(--Roxo-Claro, #ac4dff);
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
