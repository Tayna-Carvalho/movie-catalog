<template>
  <section class="movies container">
    <h3 class="pageDescription">Filmes</h3>
    <div class="content">
      <div class="filtersAndSort">
        <Sort></Sort>
        <Filter></Filter>
      </div>
      <Gallery :itens="movies"></Gallery>
    </div>
  </section>
</template>

<script>
import Sort from '@/components/Sort.vue';
import Gallery from '@/components/Gallery.vue';
import Filter from '@/components/Filter.vue';
export default {
  name: 'movies-view',
  components: { Sort, Gallery, Filter },
  computed: {
    movies() {
      return this.$store.state.filteredMovies;
    },
  },
};
</script>

<style>
.pageDescription {
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
