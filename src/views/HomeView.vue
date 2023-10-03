<template>
  <Hero></Hero>
  <Sort></Sort>
</template>

<script>

  import Hero from '@/components/Hero.vue'
  import Sort from '@/components/Sort.vue';

  export default {
    name: 'Header-component',

    components: {Hero, Sort},

    computed: {
      movies() {return this.$store.state.movies}
    }
  }

</script>
