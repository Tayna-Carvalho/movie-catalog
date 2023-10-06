import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({

  state: {
    trending: [],
    movies: [],
    series: [],
    CurrentItem: undefined
  },

  getters: {
  },
  
  mutations: {

    loadTrending(state, trending){
      state.trending = trending;
    },

    loadMovies(state, movies){
      state.movies = movies;
    },

    loadSeries(state, series){
      state.series = series;
    },

    setCurrentItem(state, item) {
      state.CurrentItem = item
    }

  },

  actions: {

    loadTrending({commit}) {

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdmNjBiNjMxMjYyNDI3OTJkNmMyODlkODAxYzgyYiIsInN1YiI6IjY1MTcyZGI2MDcyMTY2MDBjNTY2NDZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._XbKy-dFEL5iwQt7Kb16wLjel_z2uecB-ntscgyMWtw'
        }
      };
        
      axios
        .get('https://api.themoviedb.org/3/trending/all/week', options)
        .then((response) => {
          commit('loadTrending', response.data.results);
        })
        .catch(err => console.error(err));

    },

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

    },

    loadSeries({commit}) {

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdmNjBiNjMxMjYyNDI3OTJkNmMyODlkODAxYzgyYiIsInN1YiI6IjY1MTcyZGI2MDcyMTY2MDBjNTY2NDZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._XbKy-dFEL5iwQt7Kb16wLjel_z2uecB-ntscgyMWtw'
        }
      };
        
      axios
        .get('https://api.themoviedb.org/3/discover/tv', options)
        .then((response) => {
          commit('loadSeries', response.data.results);
        })
        .catch(err => console.error(err));

    },

    setCurrentItem({commit}, item){
      commit('setCurrentItem', item);
    }

  },

  modules: {
  }
})
