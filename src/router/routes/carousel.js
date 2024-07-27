const carousel = [
  {
    path: '/carousel',
    name: 'carousel',
    children: [
      {
        path: '',
        name: 'carousel',
        component: () => import('@/pages/carousel/4DCarousel.vue'),
      },
      {
        path: 'regular',
        name: 'carousel',
        component: () => import('@/pages/carousel/RegularCarousel.vue'),
      },
    ],
  },
]
export default carousel
