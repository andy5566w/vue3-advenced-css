const carousel = [
  {
    path: '/vue-use',
    name: 'carousel',
    children: [
      {
        path: '',
        name: 'carousel',
        component: () => import('@/pages/vue-use/index.vue'),
      },
    ],
  },
]
export default carousel
