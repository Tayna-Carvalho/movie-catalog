<template>

  <Hero></Hero>

  <section class="home container">

    <h3 class="pageDescription">Em alta</h3>

    <div class="content">

      <div class="filtersAndSort">
        <Sort></Sort>
        <Filter></Filter>
      </div>
      
      <Gallery :itens="trending"></Gallery>

    </div>

  </section>
  
</template>

<script>

  import Hero from '@/components/Hero.vue';
  import Sort from '@/components/Sort.vue';
  import Gallery from '@/components/Gallery.vue';
  import Filter from '@/components/Filter.vue';

  export default {
    name: 'home-view',

    components: {Hero, Sort, Gallery, Filter},

    computed: {
      trending() {return this.$store.state.trending}
    }
  }

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