import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Portfolio1View from '../views/Portfolio1View.vue';
import Portfolio2View from '../views/Portfolio2View.vue';
import Portfolio3View from '../views/Portfolio3View.vue';
import Portfolio4View from '../views/Portfolio4View.vue';
import Portfolio5View from '../views/Portfolio5View.vue';
import Portfolio6View from '../views/Portfolio6View.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio1',
    name: 'portfolio1',
    component: Portfolio1View
  },
  {
    path: '/portfolio2',
    name: 'portfolio2',
    component: Portfolio2View
  },
  {
    path: '/portfolio3',
    name: 'portfolio3',
    component: Portfolio3View
  },
  {
    path: '/portfolio4',
    name: 'portfolio4',
    component: Portfolio4View
  },
  {
    path: '/portfolio5',
    name: 'portfolio5',
    component: Portfolio5View
  },
  {
    path: '/portfolio6',
    name: 'portfolio6',
    component: Portfolio6View
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
