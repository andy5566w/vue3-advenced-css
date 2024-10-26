const carousel = [
  {
    path: '/carousel',
    name: 'carousel',
    children: [
      {
        path: '',
        name: '4DCarousel',
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
      {
        path: 'append-carousel',
        name: 'append-carousel',
        component: () => import('@/pages/carousel/AppendCarousel.vue'),
      },
    ],
  },
]
export default carousel
