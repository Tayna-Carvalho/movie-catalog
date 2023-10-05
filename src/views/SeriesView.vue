<template>

  <div class="container">
    <h3 class="filterDescription">Séries</h3>

    <div class="content">
      <div class="filtersAndSort">
        <Sort></Sort>
        <Filter></Filter>
      </div>
      
      <Movie :movies="series"></Movie>
    </div>

  </div>
  
</template>

<script>

  import Sort from '@/components/Sort.vue';
  import Movie from '@/components/Movie.vue';
  import Filter from '@/components/Filter.vue';

  export default {
    name: 'series-view',

    components: {Sort, Movie, Filter},

    computed: {
      series() {return this.$store.state.series}
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