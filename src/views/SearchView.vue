<template>
  <section v-if="searchItens.length === 0" class="errorImage">
    <img src="../assets/error-image-01.png" alt="error image">
  </section> 
  <section class="search container" v-else>
    <h3 class="pageDescription">Resultado da busca</h3>
    <div class="content">
      <Gallery :itens="searchItens"></Gallery>  
    </div>
  </section>
</template>
  
<script>
  import Gallery from '@/components/Gallery.vue';
  export default {
    name: 'search-view',
    components: {Gallery},
    computed: {
      searchItens() {return this.$store.state.search.filter(item => item.media_type != "person")}
    },
    props: {query: String},
  }
</script>
  
<style>
  .errorImage {
    height: 1080px;
    width:auto;
    display: flex;
    justify-content: center;
  }
  .pageDescription {
    color: var(--Roxo-Escuro, #550899);
    margin-top: 80px;
    margin-bottom: 16px;
  }
  .content {
    display: flex;
    gap: 28px;
  }
</style>