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
      {
        path: 'xgplayer',
        name: 'xgplayer',
        props: true,
        component: () =>
          import(
            '../../pages/youtube-player/PictureInPicture/VideoInPicture.vue'
          ),
      },
    ],
  },
]

export default youtubePlayer
