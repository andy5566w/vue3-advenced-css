const duyi = [
  {
    path: '/duyi',
    name: 'duyi',
    children: [
      {
        path: 'parabola',
        name: 'parabola',
        props: true,
        component: () =>
          import('../../components/duyi/addShoppingCarParabola/parabola.vue'),
      },
      {
        path: 'watermark',
        name: 'watermark',
        props: true,
        component: () => import('../../components/duyi/watermark/index.vue'),
      },
      {
        path: 'show-folder',
        name: 'show-folder',
        component: () =>
          import('@/components/duyi/showDirectionFolder/OpenFolder.vue'),
      },
      {
        path: 'chatGTP',
        name: 'chatGTP',
        component: () => import('@/components/duyi/chatGTP/index.vue'),
      },
    ],
  },
]
export default duyi
