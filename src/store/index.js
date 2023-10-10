import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({

  state: {
    trending: [],
    movies: [],
    series: [],
    currentItem: undefined,
    currentVideo: undefined,
    search: [],
    genre: [],
    selectedGenres: [],
    filteredTrending: [],
    filteredMovies: [],
    filteredSeries: [],
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

    loadGenre(state, genre){
      state.genre = genre
    },
    //----------------------------------
    loadCurrentVideo(state, movieKey) {
      state.currentVideo = movieKey;
    },
    
    setCurrentItem(state, item) {
      state.currentItem = item
    },

    searchByQuery(state, result) {
      state.search = result
    },

    setGenre(state, genre) {
      if (state.selectedGenres.includes(genre.id)){
        state.selectedGenres.pop(genre.id)
      }
      else {
        state.selectedGenres.push(genre.id)
      }
    },
    
    setFiteredLists(state) {
      
      state.filteredTrending = state.trending.filter(item => {
        return item.genre_ids.some(id => state.selectedGenres.includes(id));
      });

      state.filteredMovies = state.movies.filter(item => {
        return item.genre_ids.some(id => state.selectedGenres.includes(id));
      });

      state.filteredSeries = state.filteredSeries.filter(item => {
        return item.genre_ids.some(id => state.selectedGenres.includes(id));
      });
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

          response.data.results.forEach(element => {
            element.media_type = 'movie'
          });

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

          response.data.results.forEach(element => {
            element.media_type = 'tv'
          });

          commit('loadSeries', response.data.results);
        })
        .catch(err => console.error(err));

    },
    //----------------------------------
    loadCurrentMovie({commit}, id){
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdmNjBiNjMxMjYyNDI3OTJkNmMyODlkODAxYzgyYiIsInN1YiI6IjY1MTcyZGI2MDcyMTY2MDBjNTY2NDZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._XbKy-dFEL5iwQt7Kb16wLjel_z2uecB-ntscgyMWtw'
        }
      };

      axios
        .get('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', options)
        .then((response) => {
          try{
            commit('loadCurrentVideo', response.data.results.find(item => item.name === "Official Trailer").key);
          }
          catch{
            commit('loadCurrentVideo', response.data.results[0].key);
          }
        })
        .catch(err => console.error(err));
    },

    loadCurrentSerie({commit}, id){
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdmNjBiNjMxMjYyNDI3OTJkNmMyODlkODAxYzgyYiIsInN1YiI6IjY1MTcyZGI2MDcyMTY2MDBjNTY2NDZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._XbKy-dFEL5iwQt7Kb16wLjel_z2uecB-ntscgyMWtw'
        }
      };

      axios
        .get('https://api.themoviedb.org/3/tv/'+id+'/season/1/episode/1/videos?language=en-US', options)
        .then((response) => {
          try {
            commit('loadCurrentVideo', response.data.results[0]);
          }
          catch {
            commit('loadCurrentVideo','false')
          }
          
        })
        .catch(err => console.error(err));
    },

    setCurrentItem({commit}, item){
      commit('setCurrentItem', item);
    },
    //----------------------------------
    searchByQuery({commit}, query) {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdmNjBiNjMxMjYyNDI3OTJkNmMyODlkODAxYzgyYiIsInN1YiI6IjY1MTcyZGI2MDcyMTY2MDBjNTY2NDZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._XbKy-dFEL5iwQt7Kb16wLjel_z2uecB-ntscgyMWtw'
        }
      };

      axios
        .get('https://api.themoviedb.org/3/search/multi?query='+query+'&include_adult=true&language=en-US&page=1', options)
        .then((response) => {
          commit('searchByQuery', response.data.results);
        })
        .catch(err => console.error(err));
    },
    //----------------------------------
    loadGenre ({commit}){
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdmNjBiNjMxMjYyNDI3OTJkNmMyODlkODAxYzgyYiIsInN1YiI6IjY1MTcyZGI2MDcyMTY2MDBjNTY2NDZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._XbKy-dFEL5iwQt7Kb16wLjel_z2uecB-ntscgyMWtw'
        }
      };

      var genreList = [];

      axios
        .get('https://api.themoviedb.org/3/genre/tv/list?language=en', options)
        //fill genre list with series genres
        .then((response) => {

          response.data.genres.forEach(element => {
            genreList.push(element);
          });
          
        })
        .catch(err => console.error(err));

      axios
        .get('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        //fill genre list with movies genres
        .then((response) => {

          response.data.genres.forEach(element => {

            var finded;

            genreList.forEach(item => {
              if (item.id === element.id){
                finded = true;
              }
            });

            if (!finded) {
              genreList.push(element);
            }

          });
        })
        .catch(err => console.error(err));

        commit('loadGenre', genreList);
    },

    setGenre({commit}, genre) {
      commit('setGenre', genre);
    },

    setFiteredLists({commit}) {
      commit('setFiteredLists')
    }
  }
})
