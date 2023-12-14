import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    user: {
      id: '',
      name: '',
      email: '',
      password: '',
    },
  },

  mutations: {
    loadLocalStorage(state) {
      if (localStorage.getItem('user') !== null) {
        state.user = JSON.parse(localStorage.getItem('user'));
      }
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
      if (state.user.id !== userInfo.id) {
        window.alert('Falha ao encontrar usuário');
      }
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logOut(state) {
      state.user.id = '';
      state.user.name = '';
      state.user.email = '';
      state.user.password = '';
      state.favorites = [];
      state.watched = [];
      localStorage.setItem('user', JSON.stringify(state.user));
    },
  },

  actions: {
    loadLocalStorage({ commit }) {
      commit('loadLocalStorage');
    },
    getUser({ commit }, { email, password }) {
      axios
        .get('http://aws.connect.psdb.cloud:8800/user')
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
    logOut({ commit }) {
      commit('logOut');
    },
  },
});
