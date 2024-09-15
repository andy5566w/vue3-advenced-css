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
      {
        path: 'use-clipboard',
        name: 'use-clipboard',
        component: () => import('@/components/vue-use/ClipBoard.vue'),
      },
      {
        path: 'use-debounce-ref-history',
        name: 'use-debounce-ref-history',
        component: () => import('@/components/vue-use/DebounceRefHistory.vue'),
      },
    ],
  },
]
export default carousel
