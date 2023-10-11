import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({

  state: {
    trending: [],
    movies: [],
    series: [],
    search: [],
    genre: [],
    selectedGenres: [],
    filteredTrending: [],
    filteredMovies: [],
    filteredSeries: [],
    currentItem: undefined
  },
  
  mutations: {

    loadTrending(state, trending){
      state.trending = trending;
      state.filteredTrending = state.trending;
    },

    loadMovies(state, movies){
      state.movies = movies;
      state.filteredMovies = state.movies;
    },

    loadSeries(state, series){
      state.series = series;
      state.filteredSeries = state.series;
    },

    loadGenre(state, genre){
      state.genre = genre
    },
    //----------------------------------
    setCurrentItem(state, item) {
      state.currentItem = item
    },
    
    loadCurrentVideo(state, movieKey) {
      state.currentItem.videoKey = movieKey;
    },

    loadCurrentDetails(state, parameters) {
      state.currentItem.duration = parameters.duration;
      state.currentItem.country = parameters.country
    },

    loadCurrentCredits(state, parameters) {

      state.currentItem.director = '-';
      state.currentItem.producer = '-';

      if (parameters.director !== undefined ) {
        state.currentItem.director = parameters.director.name;
      }
      if (parameters.producer !== undefined) {
        state.currentItem.producer = parameters.producer.name;
      }
    },
    //----------------------------------
    searchByQuery(state, result) {
      state.search = result
    },
    //----------------------------------
    setGenre(state, genre) {
      if (state.selectedGenres.includes(genre.id)){
        state.selectedGenres = state.selectedGenres.filter(item => item !== genre.id)
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
  
      state.filteredSeries = state.series.filter(item => {
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

        console.log(genreList)
        commit('loadGenre', genreList);
    },
    //----------------------------------
    setCurrentItem({commit}, item){
      commit('setCurrentItem', item);
    },
    
    loadCurrentVideo({commit}, item){

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdmNjBiNjMxMjYyNDI3OTJkNmMyODlkODAxYzgyYiIsInN1YiI6IjY1MTcyZGI2MDcyMTY2MDBjNTY2NDZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._XbKy-dFEL5iwQt7Kb16wLjel_z2uecB-ntscgyMWtw'
        }
      };

      function chooseVideo (video) {

        if (video.length === 0) {
          commit ('loadCurrentVideo', undefined)
        } else {
          try{
            commit('loadCurrentVideo', video.find(item => item.name === "Official Trailer").key);
          }
          catch{
            commit('loadCurrentVideo', video[0].key);
          }
        }
      }

      if (item.media_type === 'movie') {

        axios
        .get('https://api.themoviedb.org/3/movie/'+item.id+'/videos?language=en-US', options)
        .then((response) => {
          chooseVideo(response.data.results);
        })
        .catch(err => console.error(err));

      } else {
        if(item.media_type === 'tv') {

          axios
          .get('https://api.themoviedb.org/3/tv/'+item.id+'/videos?language=en-US', options)
          .then((response) => {
            chooseVideo(response.data.results);
          })
          .catch(err => console.error(err));
        }
      }

    },

    loadCurrentDetails({commit}, item){
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdmNjBiNjMxMjYyNDI3OTJkNmMyODlkODAxYzgyYiIsInN1YiI6IjY1MTcyZGI2MDcyMTY2MDBjNTY2NDZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._XbKy-dFEL5iwQt7Kb16wLjel_z2uecB-ntscgyMWtw'
        }
      };

      if (item.media_type === 'movie') {

        axios
        .get('https://api.themoviedb.org/3/movie/'+item.id+'?language=en-US', options)
        .then((response) => {

          let hours = Math.floor(response.data.runtime/60);
          let minutes = response.data.runtime % 60
          let parameters = {};
          parameters.country = response.data.production_countries[0].name;

          if (minutes === 0) {
            parameters.duration = hours + 'h ';
            commit('loadCurrentDetails', parameters);
          } else {
            parameters.duration = hours + 'h ' + minutes + 'min';
            commit('loadCurrentDetails', parameters);
          }
        })
        .catch(err => console.error(err));

      } else {
        if(item.media_type === 'tv') {

          axios
          .get('https://api.themoviedb.org/3/tv/'+item.id+'?language=en-US', options)
          .then((response) => {

            let parameters = {};
            parameters.country = response.data.production_countries[0].name;

            if (response.data.number_of_seasons > 1) {
              parameters.duration = response.data.number_of_seasons+' temp';
              commit('loadCurrentDetails', parameters);
            } else {
              parameters.duration = response.data.number_of_episodes+' eps';
              commit('loadCurrentDetails', parameters);
            }

          })
          .catch(err => console.error(err));
        }
      }

    },

    loadCurrentCredits({commit}, item){
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdmNjBiNjMxMjYyNDI3OTJkNmMyODlkODAxYzgyYiIsInN1YiI6IjY1MTcyZGI2MDcyMTY2MDBjNTY2NDZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._XbKy-dFEL5iwQt7Kb16wLjel_z2uecB-ntscgyMWtw'
        }
      };

      if (item.media_type === 'movie') {

        axios
        .get('https://api.themoviedb.org/3/movie/'+item.id+'/credits?language=en-US', options)
        .then((response) => {'https://api.themoviedb.org/3/movie/'+item.id+'/credits?language=en-US'

          let parameters = {};

          parameters.director = response.data.crew.find(item => item.job === 'Director');
          parameters.producer = response.data.crew.find(item => item.job === 'Producer');
          
          commit('loadCurrentCredits', parameters);
        })
        .catch(err => console.error(err));

      } else {
        if(item.media_type === 'tv') {

          axios
          .get('https://api.themoviedb.org/3/tv/'+item.id+'/credits?language=en-US', options)
          .then((response) => {

            let parameters = {};

            parameters.director = response.data.crew.find(item => item.job === 'Director');
            parameters.producer = response.data.crew.find(item => item.job === 'Producer');
            
            commit('loadCurrentCredits', parameters);
          })
          .catch(err => console.error(err));
        }
      }

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

    setGenre({commit}, genre) {
      commit('setGenre', genre);
    },

    setFiteredLists({commit}) {
      commit('setFiteredLists')
    }
  }
})
