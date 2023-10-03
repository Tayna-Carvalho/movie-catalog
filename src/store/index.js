import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    movies: [],
  },

  getters: {
  },
  
  mutations: {

    loadMovies(state, movies){
      state.movies = movies;
    }

  },

  actions: {

    loadMovies({commit}) {

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdmNjBiNjMxMjYyNDI3OTJkNmMyODlkODAxYzgyYiIsInN1YiI6IjY1MTcyZGI2MDcyMTY2MDBjNTY2NDZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._XbKy-dFEL5iwQt7Kb16wLjel_z2uecB-ntscgyMWtw'
        }
      };
        
      axios
        .get('https://api.themoviedb.org/3/discover/movie', options)
        .then((response) => {
          commit('loadMovies', response.data.results);
        })
        .catch(err => console.error(err));

    }

  },

  modules: {
  }
})
