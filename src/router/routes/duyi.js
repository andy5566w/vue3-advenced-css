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
    ],
  },
]
export default duyi
