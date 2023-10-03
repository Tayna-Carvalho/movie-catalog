<template>
  <Hero></Hero>
</template>

<script>

  import Hero from '@/components/Hero.vue'

  export default {
    name: 'Header-component',

    components: {Hero},

    computed: {
      movies() {return this.$store.state.movies}
    }
  }

</script>
