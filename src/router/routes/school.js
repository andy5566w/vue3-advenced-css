const school = [
  {
    path: '/school',
    name: 'school',
    children: [
      {
        path: 'trello',
        name: 'trello',
        component: () => import('@/components/trello-board/TrelloBoard.vue'),
      },
    ],
  },
]
export default school
