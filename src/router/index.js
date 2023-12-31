import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/filmes',
    name: 'filmes',
    component: () => import('../views/MoviesView.vue'),
  },
  {
    path: '/series',
    name: 'series',
    component: () => import('../views/SeriesView.vue'),
  },
  {
    path: '/favoritos',
    name: 'favoritos',
    component: () => import('../views/FavoritesView.vue'),
  },
  {
    path: '/assistidos',
    name: 'assistidos',
    component: () => import('../views/WatchedView.vue'),
  },
  {
    path: '/entrar',
    name: 'entrar',
    component: () => import('../views/Sign.vue'),
  },
  {
    path: '/detalhes',
    name: 'detalhes',
    component: () => import('../views/DetailsView.vue'),
  },
  {
    path: '/buscar',
    name: 'buscar',
    component: () => import('../views/SearchView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
