<template>
  <Header></Header>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'app',
  components: { Header, Footer },
  created() {
    this.$store.dispatch('loadTrending');
    this.$store.dispatch('loadMovies');
    this.$store.dispatch('loadSeries');
    this.$store.dispatch('loadGenre');
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color-scheme: light dark;
  color: white;
  background-color: var(--Preto, #1b1b1b);
}
.container {
  padding: 0 64px;
}
a {
  text-decoration: none;
  color: inherit;
  margin: 0;
}
h1 {
  font-size: 68px;
  line-height: 72px;
  margin: 0;
}
h2 {
  font-size: 42px;
  line-height: 48px;
  margin: 0;
}
h3 {
  font-size: 26px;
  line-height: 48px;
  margin: 0;
}
h4 {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
}
p {
  font-family: Nunito;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
}
small {
  font-size: 12px;
  line-height: 16px;
  margin: 0;
}
caption {
  font-size: 12px;
  line-height: 16px;
  margin: 0;
}
button {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-transform: uppercase;
}
</style>
