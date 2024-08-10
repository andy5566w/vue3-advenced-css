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
      {
        path: 'touch-carousel',
        name: 'touch-carousel',
        component: () => import('@/pages/carousel/TouchCarousel.vue'),
      },
    ],
  },
]
export default carousel
