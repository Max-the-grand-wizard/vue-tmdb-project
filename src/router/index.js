import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MovieDetailView from '../views/MovieDetailView.vue'; 
import FavoritesView from '../views/FavoritesView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
  path: '/movie/:id',
    name: 'movieDetail',
    component: MovieDetailView, // Korrekt koppling till MovieDetailView.vue
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesView, // Använder FavoritesView.vue
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView, // Använder AboutView.vue
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
