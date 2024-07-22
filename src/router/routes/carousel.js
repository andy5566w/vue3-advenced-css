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
    ],
  },
]
export default carousel
