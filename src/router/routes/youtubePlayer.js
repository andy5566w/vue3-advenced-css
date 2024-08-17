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
        path: 'hls',
        name: 'hls-player',
        props: true,
        component: () => import('../../pages/youtube-player/HlsPlayer.vue'),
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
