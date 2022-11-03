import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: () => ({
      name: 'displayButton',
    }),
  },
  {
    path: '/display',
    component: () => import('../pages/DisplayBlock.vue'),
    children: [
      {
        path: '',
        name: 'displayButton',
        component: () => import('../components/DisplayButton.vue'),
      },
      {
        path: 'img',
        name: 'displayImg',
        component: () => import('../components/DisplayImages.vue'),
      },
      {
        path: 'menus',
        name: 'displayManu',
        component: () => import('../components/DisplayMenus.vue'),
      },
      {
        path: 'specialAnimation',
        name: 'displaySpecialAnimation',
        component: () => import('../components/DisplaySpecialAnimation.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
