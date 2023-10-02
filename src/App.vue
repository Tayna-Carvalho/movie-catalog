<template>
  <Header></Header>
</template>

<script>

  import Header from '@/components/Header.vue'

  export default {
    name: 'App',

    components: {Header},

    created() {
        
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdmNjBiNjMxMjYyNDI3OTJkNmMyODlkODAxYzgyYiIsInN1YiI6IjY1MTcyZGI2MDcyMTY2MDBjNTY2NDZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._XbKy-dFEL5iwQt7Kb16wLjel_z2uecB-ntscgyMWtw'
        }
      };
        
      this.axios
        .get('https://api.themoviedb.org/3/discover/movie', options)
        .then((response) => {
          console.log(response.data);
        })
        .catch(err => console.error(err));
    }
  }

</script>

<style>

  body {
    margin: 0;
    min-height: 3000px;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    color-scheme: light dark;
    color: white;
    background-color: var(--Preto, #1B1B1B);
  }

  .container {
    padding: 0 64px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    font-size: 68px;
    line-height: 72px;
  }

  h2 {
    font-size: 42px;
    line-height: 48px;
  }

  h3 {
    font-size: 26px;
    line-height: 48px;
  }

  h4 {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }

  p {
    font-family: Nunito;
    font-size: 16px;
    line-height: 24px;
  }

  small {
    font-size: 12px;
    line-height: 16px;
  }

  caption {
    font-size: 12px;
    line-height: 16px; 
  }

  button {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-transform: uppercase;
  }

</style>