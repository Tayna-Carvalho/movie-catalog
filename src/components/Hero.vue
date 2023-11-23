<template>
  <section class="hero">
    <div class="heroImage">
      <img
        src="../assets/hero-image.jpg"
        alt="children watching movie" />
    </div>
    <div class="content">
      <h1 class="welcomeMessage">Bem-vindo(a).</h1>
      <h3 class="callMessage">Explore novos mundos, no conforto da sua casa!</h3>
      <SearchBar></SearchBar>
    </div>
  </section>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
export default {
  name: 'hero-component',
  components: { SearchBar },
};
</script>

<style>
.hero .heroImage img {
  width: 100%;
  height: auto;
  flex-shrink: 0;
}
.hero .content {
  position: absolute;
  top: 0;
  left: 64px;
  height: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 0;
  gap: 8px;
}
.hero .content .callMessage {
  color: var(--Roxo-Claro, #ac4dff);
}
</style>
