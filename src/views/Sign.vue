<template>
  <RouterLink
    class="close"
    to="/"
    @click="loadUserLists()">
    <img
      src="../assets/x-icon.svg"
      alt="close icon"
      class="closeIcon" />
  </RouterLink>
  <section class="sign">
    <div class="box">
      <div class="logotypeBG">
        <img
          class="logotype"
          src="../assets/logo-purple.svg"
          alt="logotype" />
      </div>
      <div class="content">
        <div class="title">
          <h2
            class="titleItem"
            :class="{ titleSelected: selected === 1 }"
            @click="selected = 1">
            Login
          </h2>
          <div class="divider"></div>
          <h2
            class="titleItem"
            :class="{ titleSelected: selected === 0 }"
            @click="selected = 0">
            Cadastro
          </h2>
        </div>
        <Login v-if="selected === 1"></Login>
        <SignUp v-if="selected === 0"></SignUp>
      </div>
    </div>
  </section>
  <img
    class="backgroundImage"
    src="@/assets/popcorn.png"
    alt="popcorn" />
</template>

<script>
import Login from '../components/Login.vue';
import SignUp from '@/components/SignUp.vue';
export default {
  name: 'sign-view',
  components: { Login, SignUp },
  data() {
    return {
      selected: 1,
    };
  },
  methods: {
    loadUserLists() {
      this.$store.dispatch('getFavorites');
      this.$store.dispatch('getWatched');
    },
  },
};
</script>

<style>
.close {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  top: 64px;
  right: 64px;
  z-index: 3;
  width: 75px;
  height: 75px;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
}
.closeIcon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}
.sign {
  position: absolute;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.sign .box {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
.sign .box .logotypeBG {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 176px;
  height: 176px;
  flex-shrink: 0;
  background-color: rgba(27, 27, 27, 0.7);
  filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.15));
  border-radius: 50%;
}
.sign .box .logotypeBG .logotype {
  width: 80px;
  height: 88.814px;
  flex-shrink: 0;
}
.sign .box .content {
  display: flex;
  padding: 16px 150px 32px 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  border-radius: 40px;
  background: linear-gradient(180deg, rgba(27, 27, 27, 0.8) 0%, rgba(27, 27, 27, 0.4) 100%);
  box-shadow: 8px 8px 30px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
}
.sign .box .content .title {
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  gap: 72px;
}
.sign .box .content .title .titleItem {
  color: var(--Branco-transparente, rgba(255, 255, 255, 0.3));
  display: flex;
  width: 170px;
  height: 80px;
  justify-content: center;
  align-items: center;
}
.sign .box .content .title .titleItem:hover {
  color: var(--Roxo-Claro, #ac4dff);
}
.titleSelected {
  color: var(--Roxo-Claro, #ac4dff);
  border-bottom: 4px solid var(--Roxo-Claro, #ac4dff);
}
.sign .box .title .divider {
  width: 2px;
  height: 72px;
  background: var(--Branco-transparente, rgba(255, 255, 255, 0.3));
}
.content .userInput {
  width: 582px;
  height: 72px;
  padding: 12px 24px;
  border-radius: 24px;
  border: none;
  background: rgba(255, 255, 255, 0.15);
  color: var(--Branco-transparente, rgba(255, 255, 255, 0.3));
  font-feature-settings: 'clig' off, 'liga' off;
  /* H3 */
  font-size: 26px;
  line-height: 48px;
}
.content .userBtn {
  display: flex;
  width: 280px;
  height: 72px;
  padding: 24px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background: var(--Roxo-Claro, #ac4dff);
  border: none;
}
.content .userBtn:hover {
  border-radius: 24px;
  background: var(--Roxo-Escuro, #550899);
}
.backgroundImage {
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  flex-shrink: 0;
  position: absolute;
  z-index: 2;
}
</style>
