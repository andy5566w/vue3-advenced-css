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
    ],
  },
]
export default duyi
