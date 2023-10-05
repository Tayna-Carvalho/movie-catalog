<template>

  <Hero></Hero>

  <div class="container">
    <h3 class="filterDescription">Em alta</h3>

    <div class="content">
      <div class="filtersAndSort">
        <Sort></Sort>
        <Filter></Filter>
      </div>
      
      <Movie :movies="trending"></Movie>
    </div>

  </div>
  
</template>

<script>

  import Hero from '@/components/Hero.vue';
  import Sort from '@/components/Sort.vue';
  import Movie from '@/components/Movie.vue';
  import Filter from '@/components/Filter.vue';

  export default {
    name: 'home-view',

    components: {Hero, Sort, Movie, Filter},

    computed: {
      trending() {return this.$store.state.trending}
    }
  }

</script>

<style>

  .filterDescription {
    color: var(--Roxo-Escuro, #550899);
    margin-top: 80px;
    margin-bottom: 16px;
  }

  .filtersAndSort {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .content {
    display: flex;
    gap: 28px;
  }

</style>