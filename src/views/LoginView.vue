<template>
  <img
    class="backgroundImage"
    src="@/assets/popcorn.png"
    alt="popcorn" />

  <div class="signInUp">
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
      <div class="login">
        <h2>Entre com seu e-mail e senha</h2>
        <div class="icon">
          <img
            src=""
            alt="" />
        </div>
        <input
          type="text"
          placeholder="Nome" />
        <input
          type="text"
          placeholder="Senha" />
        <button>entrar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-view',
  data() {
    return {
      selected: 1,
    };
  },
};
</script>

<style>
.signInUp {
  position: absolute;
  z-index: 3;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
.signInUp .logotypeBG {
  width: 176px;
  height: 176px;
  flex-shrink: 0;
  fill: rgba(27, 27, 27, 0.7);
  filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.15));
}
.signInUp .logotypeBG .logotype {
  width: 80px;
  height: 88.814px;
  flex-shrink: 0;
}
.signInUp .content {
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
.signInUp .content .title {
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  gap: 72px;
}
.signInUp .content .title .titleItem {
  color: var(--Branco-transparente, rgba(255, 255, 255, 0.3));
  display: flex;
  width: 170px;
  height: 80px;
  justify-content: center;
  align-items: center;
}
.signInUp .content .title .titleItem:hover {
  color: var(--Roxo-Claro, #ac4dff);
}
.titleSelected {
  color: var(--Roxo-Claro, #ac4dff);
  border-bottom: 4px solid var(--Roxo-Claro, #ac4dff);
}
.signInUp .content .title .divider {
  width: 2px;
  height: 72px;
  background: var(--Branco-transparente, rgba(255, 255, 255, 0.3));
}
.signInUp .content .login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
}
.content .login input {
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
.content button {
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
.content button:hover {
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
