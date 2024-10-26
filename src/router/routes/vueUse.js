const vueUse = [
  {
    path: '/vue-use',
    name: 'vue-use',
    children: [
      {
        path: '',
        name: 'vue-use',
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
export default vueUse
