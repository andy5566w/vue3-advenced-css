import { createRouter, createWebHistory } from 'vue-router'
import duyi from './routes/duyi.js'
import editor from './routes/editor.js'
import school from './routes/school.js'
import carousel from './routes/carousel.js'
import youtubePlayer from './routes/youtubePlayer.js'

const routes = [
  ...duyi,
  ...editor,
  ...school,
  ...carousel,
  ...youtubePlayer,
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
      {
        path: 'AnimationKey',
        name: 'displayAnimationKey',
        component: () => import('../components/DisplayAnimationKey.vue'),
      },
    ],
  },
  {
    path: '/drag-and-drop',
    name: 'drag-and-drop',
    component: () => import('../pages/JueJinDrag.vue'),
  },
  {
    path: '/snake',
    name: 'snake',
    component: () => import('../pages/games/Snake.vue'),
  },
  {
    path: '/particle',
    name: 'particle',
    component: () => import('../pages/particles/Display.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/NotFound.vue'),
  },
  {
    path: '/cut-off-article',
    name: 'cutOffArticle',
    component: () => import('../components/article/ExtendArticle.vue'),
  },
  {
    path: '/polar-coordinate',
    name: 'polarCoordinate',
    component: () => import('../pages/canvas/PolarCoordinate.vue'),
  },
  {
    path: '/turials',
    name: 'Turials',
    component: () => import('../pages/turials/Turials.vue'),
  },
  {
    path: '/audio',
    name: 'Audio',
    component: () => import('../pages/audio/Audio.vue'),
  },
  {
    path: '/scroll-animation',
    name: 'scroll-animation',
    component: () => import('../pages/scroll-animation/ScrollAnimation.vue'),
  },
  {
    path: '/css-practice',
    name: 'css-practice',
    component: () => import('../pages/css-practice/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
