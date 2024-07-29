const youtubePlayer = [
  {
    path: '/youtube-player',
    name: 'youtube-player',
    children: [
      {
        path: '',
        name: 'youtube-player',
        props: true,
        component: () => import('../../pages/youtube-player/YoutubePlayer.vue'),
      },
    ],
  },
]

export default youtubePlayer
