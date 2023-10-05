<template>
  
  <Header></Header>
  <Footer></Footer>

</template>

<script>

  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import axios from 'axios'

  export default {
    name: 'app',

    components: {Header, Footer},

    created() {
      this.$store.dispatch('loadMovies'); 

      // TESTE DE APIS 

      const id= 820525;

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdmNjBiNjMxMjYyNDI3OTJkNmMyODlkODAxYzgyYiIsInN1YiI6IjY1MTcyZGI2MDcyMTY2MDBjNTY2NDZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._XbKy-dFEL5iwQt7Kb16wLjel_z2uecB-ntscgyMWtw'
        }
      };
      
      //filme e series em alta
      axios
        .get('https://api.themoviedb.org/3/trending/all/week', options)
        .then((response) => {
          console.log('filme e series em alta')
          console.log(response.data.results);
        })
        .catch(err => console.error(err));

      //lista de filmes
      axios
        .get('https://api.themoviedb.org/3/discover/movie', options)
        .then((response) => {
          console.log('lista de filmes')
          console.log(response.data.results);
        })
        .catch(err => console.error(err));

      //lista de series
      axios
        .get('https://api.themoviedb.org/3/discover/tv', options)
        .then((response) => {
          console.log('lista de series')
          console.log(response.data.results);
        })
        .catch(err => console.error(err));

      //lista de generos
      axios
        .get('https://api.themoviedb.org/3/genre/movie/list', options)
        .then((response) => {
          console.log('lista de generos filme')
          console.log(response.data.genres);
        })
        .catch(err => console.error(err));
      
      //trailer filme
      axios
        .get('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', options)
        .then((response) => {
          console.log('trailer filme')
          console.log(response.data.results.find(item => item.name === "Official Trailer"));
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