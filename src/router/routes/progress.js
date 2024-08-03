const progress = [
  {
    path: '/progress',
    name: 'progress',
    children: [
      {
        path: '',
        name: 'progress',
        component: () => import('@/pages/progress/index.vue'),
      },
    ],
  },
]
export default progress
