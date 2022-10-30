import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'displayButton',
    component: () => import('../components/DisplayButton.vue'),
  },
  {
    path: '/img',
    name: 'displayImg',
    component: () => import('../components/DisplayImages.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router