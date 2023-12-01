import { createStore } from 'vuex';
import movieDBInstance from '@/helper/APIService';
import axios from 'axios';

export default createStore({
  state: {
    user: {
      id: '',
      name: '',
      email: '',
      password: '',
    },
    trending: [],
    movies: [],
    series: [],
    search: [],
    genre: [],
    selectedGenres: [],
    filteredTrending: [],
    filteredMovies: [],
    filteredSeries: [],
    favorites: [],
    watched: [],
    currentItem: undefined,
    sortOption: 'popularity',
  },

  mutations: {
    loadTrending(state, trending) {
      state.trending = trending;
      state.filteredTrending = state.trending;
    },
    loadMovies(state, movies) {
      state.movies = movies;
      state.filteredMovies = state.movies;
    },
    loadSeries(state, series) {
      state.series = series;
      state.filteredSeries = state.series;
    },
    loadGenre(state, genre) {
      state.genre = genre;
    },
    setCurrentItem(state, item) {
      state.currentItem = item;
    },
    loadCurrentVideo(state, movieKey) {
      state.currentItem.videoKey = movieKey;
    },
    loadCurrentDetails(state, parameters) {
      state.currentItem.duration = parameters.duration;
      state.currentItem.country = parameters.country;
    },
    loadCurrentCredits(state, parameters) {
      state.currentItem.director = '-';
      state.currentItem.producer = '-';
      if (parameters.director !== undefined) {
        state.currentItem.director = parameters.director.name;
      }
      if (parameters.producer !== undefined) {
        state.currentItem.producer = parameters.producer.name;
      }
    },
    searchByQuery(state, result) {
      state.search = result;
    },
    setGenre(state, genre) {
      if (state.selectedGenres.includes(genre.id)) {
        state.selectedGenres = state.selectedGenres.filter((item) => item !== genre.id);
      } else {
        state.selectedGenres.push(genre.id);
      }
    },
    setFiteredLists(state) {
      if (state.selectedGenres.length === 0) {
        state.filteredTrending = state.trending;
        state.filteredMovies = state.movies;
        state.filteredSeries = state.series;
      } else {
        state.filteredTrending = state.trending.filter((item) => {
          return item.genre_ids.some((id) => state.selectedGenres.includes(id));
        });
        state.filteredMovies = state.movies.filter((item) => {
          return item.genre_ids.some((id) => state.selectedGenres.includes(id));
        });
        state.filteredSeries = state.series.filter((item) => {
          return item.genre_ids.some((id) => state.selectedGenres.includes(id));
        });
      }
      this.dispatch('sortFilteresLists', this.chosen);
    },
    sortFilteresLists(state) {
      switch (state.sortOption) {
        case 'popularity':
          state.filteredTrending.sort(function (a, b) {
            return b.popularity - a.popularity;
          });
          state.filteredMovies.sort(function (a, b) {
            return b.popularity - a.popularity;
          });
          state.filteredSeries.sort(function (a, b) {
            return b.popularity - a.popularity;
          });
          break;
        case 'rating':
          state.filteredTrending.sort(function (a, b) {
            return b.vote_average - a.vote_average;
          });
          state.filteredMovies.sort(function (a, b) {
            return b.vote_average - a.vote_average;
          });
          state.filteredSeries.sort(function (a, b) {
            return b.vote_average - a.vote_average;
          });
          break;
        case 'date':
          state.filteredTrending.sort(function (a, b) {
            var dataA;
            var dataB;
            if (a.media_type === 'movie') {
              dataA = new Date(a.release_date);
            } else {
              dataA = new Date(a.first_air_date);
            }
            if (a.media_type === 'movie') {
              dataB = new Date(b.release_date);
            } else {
              dataB = new Date(b.first_air_date);
            }
            return dataB - dataA;
          });
          state.filteredMovies.sort(function (a, b) {
            const dataA = new Date(a.release_date);
            const dataB = new Date(b.release_date);
            return dataB - dataA;
          });
          state.filteredSeries.sort(function (a, b) {
            const dataA = new Date(a.first_air_date);
            const dataB = new Date(b.first_air_date);
            return dataB - dataA;
          });
          break;
        case 'AZ':
          state.filteredTrending.sort(function (a, b) {
            var titleA;
            var titleB;
            if (a.media_type === 'movie') {
              titleA = a.title;
            } else {
              titleA = a.name;
            }
            if (b.media_type === 'movie') {
              titleB = b.title;
            } else {
              titleB = b.name;
            }
            return titleA.toLowerCase().localeCompare(titleB.toLowerCase());
          });
          state.filteredMovies.sort(function (a, b) {
            return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
          });
          state.filteredSeries.sort(function (a, b) {
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
          });
          break;
        case 'ZA':
          state.filteredTrending.sort(function (a, b) {
            var titleA;
            var titleB;
            if (a.media_type === 'movie') {
              titleA = a.title;
            } else {
              titleA = a.name;
            }
            if (b.media_type === 'movie') {
              titleB = b.title;
            } else {
              titleB = b.name;
            }
            return titleB.toLowerCase().localeCompare(titleA.toLowerCase());
          });
          state.filteredMovies.sort(function (a, b) {
            return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
          });
          state.filteredSeries.sort(function (a, b) {
            return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
          });
          break;
      }
      console.log(state.filteredMovies);
    },
    setFavorites(state, item) {
      if (state.favorites.some((element) => element.id === item.id)) {
        axios
          .delete('http://localhost:8800/favorites/' + state.user.id + '/' + item.id)
          .then((res) => console.log(res))
          .catch(({ data }) => window.alert(data));
        state.favorites = state.favorites.filter((element) => element.id !== item.id);
      } else {
        axios
          .post('http://localhost:8800/favorites', {
            idUser: state.user.id,
            idMedia: item.id,
            mediaType: item.media_type
          })
          .catch(({ data }) => window.alert(data));
        state.favorites.push(item);
      }
    },
    setWatched(state, item) {
      if (state.watched.some((element) => element.id === item.id)) {
        state.watched = state.watched.filter((element) => element.id !== item.id);
      } else {
        state.watched.push(item);
      }
      console.log(state.watched);
    },
    setSortOption(state, option) {
      state.sortOption = option;
    },
    getUser(state, userInfo) {
      if (userInfo === 'erro') {
        state.user.id = '';
        state.user.name = '';
        state.user.email = '';
        state.user.password = '';
      } else {
        state.user.id = userInfo.id;
        state.user.name = userInfo.name;
        state.user.email = userInfo.email;
        state.user.password = userInfo.password;
      }
      if (state.user.id === userInfo.id) {
        window.alert('Usuário encontrado com sucesso');
      } else {
        if (state.user.id !== userInfo.id) {
          window.alert('Falha ao encontrar usuário');
        }
      }
      console.log(state.user);
    },
    getFavorites(state, favorites) {
      state.favorites = [];
      var media = [...state.series, ...state.movies, ...state.trending];
      var userFavorites = favorites.filter((item) => item.id_user === state.user.id);
      userFavorites.forEach((item) => {
        state.favorites.push(media.find((m) => m.id === item.id_media));
      });
    },
  },

  actions: {
    loadTrending({ commit }) {
      movieDBInstance
        .get('trending/all/week')
        .then((response) => {
          commit('loadTrending', response.data.results);
        })
        .catch((err) => console.error(err));
    },
    loadMovies({ commit }) {
      movieDBInstance
        .get('discover/movie')
        .then((response) => {
          response.data.results.forEach((element) => {
            element.media_type = 'movie';
          });
          commit('loadMovies', response.data.results);
        })
        .catch((err) => console.error(err));
    },
    loadSeries({ commit }) {
      movieDBInstance
        .get('discover/tv')
        .then((response) => {
          response.data.results.forEach((element) => {
            element.media_type = 'tv';
          });
          commit('loadSeries', response.data.results);
        })
        .catch((err) => console.error(err));
    },
    loadGenre({ commit }) {
      var genreList = [];
      movieDBInstance
        .get('genre/tv/list?language=en')
        //fill genre list with series genres
        .then((response) => {
          response.data.genres.forEach((element) => {
            genreList.push(element);
          });
        })
        .catch((err) => console.error(err));
      movieDBInstance
        .get('genre/movie/list?language=en')
        //fill genre list with movies genres
        .then((response) => {
          response.data.genres.forEach((element) => {
            if (genreList.filter((item) => item.id === element.id).length === 0) {
              genreList.push(element);
            }
          });
        })
        .catch((err) => console.error(err));
      commit('loadGenre', genreList);
    },
    setCurrentItem({ commit }, item) {
      commit('setCurrentItem', item);
    },
    loadCurrentVideo({ commit }, item) {
      function chooseVideo(video) {
        if (video.length === 0) {
          commit('loadCurrentVideo', undefined);
        } else {
          try {
            commit('loadCurrentVideo', video.find((item) => item.name === 'Official Trailer').key);
          } catch {
            commit('loadCurrentVideo', video[0].key);
          }
        }
      }
      if (item.media_type === 'movie') {
        movieDBInstance
          .get('movie/' + item.id + '/videos?language=en-US')
          .then((response) => {
            chooseVideo(response.data.results);
          })
          .catch((err) => console.error(err));
      } else {
        if (item.media_type === 'tv') {
          movieDBInstance
            .get('https://api.themoviedb.org/3/tv/' + item.id + '/videos?language=en-US')
            .then((response) => {
              chooseVideo(response.data.results);
            })
            .catch((err) => console.error(err));
        }
      }
    },
    loadCurrentDetails({ commit }, item) {
      if (item.media_type === 'movie') {
        movieDBInstance
          .get('movie/' + item.id + '?language=en-US')
          .then((response) => {
            let hours = Math.floor(response.data.runtime / 60);
            let minutes = response.data.runtime % 60;
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
          .catch((err) => console.error(err));
      } else {
        if (item.media_type === 'tv') {
          movieDBInstance
            .get('tv/' + item.id + '?language=en-US')
            .then((response) => {
              let parameters = {};
              parameters.country = response.data.production_countries[0].name;
              if (response.data.number_of_seasons > 1) {
                parameters.duration = response.data.number_of_seasons + ' temp';
                commit('loadCurrentDetails', parameters);
              } else {
                parameters.duration = response.data.number_of_episodes + ' eps';
                commit('loadCurrentDetails', parameters);
              }
            })
            .catch((err) => console.error(err));
        }
      }
    },
    loadCurrentCredits({ commit }, item) {
      if (item.media_type === 'movie') {
        movieDBInstance
          .get('movie/' + item.id + '/credits?language=en-US')
          .then((response) => {
            let parameters = {};
            parameters.director = response.data.crew.find((item) => item.job === 'Director');
            parameters.producer = response.data.crew.find((item) => item.job === 'Producer');
            commit('loadCurrentCredits', parameters);
          })
          .catch((err) => console.error(err));
      } else {
        if (item.media_type === 'tv') {
          movieDBInstance
            .get('tv/' + item.id + '/credits?language=en-US')
            .then((response) => {
              let parameters = {};
              parameters.director = response.data.crew.find((item) => item.job === 'Director');
              parameters.producer = response.data.crew.find((item) => item.job === 'Producer');
              commit('loadCurrentCredits', parameters);
            })
            .catch((err) => console.error(err));
        }
      }
    },
    searchByQuery({ commit }, query) {
      movieDBInstance
        .get('search/multi?query=' + query + '&include_adult=true&language=en-US&page=1')
        .then((response) => {
          commit('searchByQuery', response.data.results);
        })
        .catch((err) => console.error(err));
    },
    setGenre({ commit }, genre) {
      commit('setGenre', genre);
    },
    setFiteredLists({ commit }) {
      commit('setFiteredLists');
    },
    sortFilteresLists({ commit }) {
      commit('sortFilteresLists');
    },
    setFavorites({ commit }, item) {
      commit('setFavorites', item);
    },
    setWatched({ commit }, item) {
      commit('setWatched', item);
    },
    setSortOption({ commit }, option) {
      commit('setSortOption', option);
    },
    getUser({ commit }, { email, password }) {
      axios
        .get('http://localhost:8800/user')
        .then((res) => {
          let user = res.data.find((item) => item.email === email && item.password === password);

          if (user === undefined) {
            commit('getUser', 'erro');
          } else {
            commit('getUser', user);
          }
        })
        .catch((err) => console.error(err));
    },
    getFavorites({ commit }) {
      axios
        .get('http://localhost:8800/favorites')
        .then((res) => {
          commit('getFavorites', res.data);
        })
        .catch((err) => console.error(err));
    },
    getWatched({ commit }) {
      axios
        .get('http://localhost:8800/watched')
        .then((res) => {
          console.log(res.data);
          commit('getWatched', res.data);
        })
        .catch((err) => console.error(err));
    },
  },
});
