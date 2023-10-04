<template>

  <Hero></Hero>

  <div class="container">
    <h3 class="filterDescription">Em alta</h3>

    <div class="content">
      <Sort></Sort>
      <Movie></Movie>
    </div>

  </div>
  
</template>

<script>

  import Hero from '@/components/Hero.vue';
  import Sort from '@/components/Sort.vue';
  import Movie from '@/components/Movie.vue';

  export default {
    name: 'home-view',

    components: {Hero, Sort, Movie},

    computed: {
      movies() {return this.$store.state.movies}
    }
  }

</script>

<style>

  .filterDescription {
    color: var(--Roxo-Escuro, #550899);
    margin-top: 80px;
    margin-bottom: 16px;
  }

  .content {
    display: flex;
    gap: 28px;
  }

</style>