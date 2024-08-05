<template>
  <div
    class="video-container"
    :class="{
      pause: !isVideoPlaying,
      theater: isTheaterMode,
      'mini-player': isMinPlayerMode,
      'full-screen-section': isFullScreenMode,
      captions: isShowCaptions,
    }"
    :data-tset="isShowCaptions"
    :data-volume-level="volumeLevel"
  >
    <div class="video-controls-containers">
      <div class="controls">
        <button
          class="play-pause-btn"
          ref="playPauseButton"
          @click="togglePlay"
        >
          <svg class="play-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
          <svg class="pause-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
          </svg>
        </button>
        <div class="volume-container">
          <button class="mute-btn" @click="toggleMuted">
            <svg class="volume-high-icon" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"
              />
            </svg>
            <svg class="volume-low-icon" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z"
              />
            </svg>
            <svg class="volume-muted-icon" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"
              />
            </svg>
          </button>

          <input
            type="range"
            class="volume-slider"
            min="0"
            max="1"
            step="any"
            value="1"
            ref="volumeSlide"
            @input="handleVolumeSlideInput"
          />
        </div>
        <div class="duration-container">
          <div class="current-time">{{ currentVideoTime }}</div>
          /
          <div class="total-time">{{ totalVideoTime }}</div>
        </div>
        <button class="captions-btn" @click="toggleCaption">
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M18,11H16.5V10.5H14.5V13.5H16.5V13H18V14A1,1 0 0,1 17,15H14A1,1 0 0,1 13,14V10A1,1 0 0,1 14,9H17A1,1 0 0,1 18,10M11,11H9.5V10.5H7.5V13.5H9.5V13H11V14A1,1 0 0,1 10,15H7A1,1 0 0,1 6,14V10A1,1 0 0,1 7,9H10A1,1 0 0,1 11,10M19,4H5C3.89,4 3,4.89 3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6C21,4.89 20.1,4 19,4Z"
            />
          </svg>
        </button>
        <button class="speed-btn wide-btn">1x</button>
        <button
          class="min-player-btn"
          ref="minPlayerButton"
          @click="toggleMinPlayerMode"
        >
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"
            />
          </svg>
        </button>
        <button class="theater-btn" @click="isTheaterMode = !isTheaterMode">
          <svg class="tall" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"
            />
          </svg>
          <svg class="wide" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"
            />
          </svg>
        </button>
        <button class="full-screen-btn" @click="toggleFullScreenMode">
          <svg class="open" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
            />
          </svg>
          <svg class="close" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
            />
          </svg>
        </button>
      </div>
    </div>
    <video
      :src="videoUrl"
      ref="videoRef"
      @play="isVideoPlaying = true"
      @pause="isVideoPlaying = false"
      @click="togglePlay"
      @volumechange="handleVolumeChange"
      @loadeddata="handleLoadeddata"
      @timeupdate="handleTimeUpdate"
    >
      <track :src="subtitle" kind="captions" srclang="en" />
    </video>
  </div>
</template>

<script setup>
import videoUrl from '@/assets/videos/cat-birthday.mp4'
import subtitle from '@/assets/videos/subtitles.vtt'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const playPauseButton = ref(null)
const videoRef = ref(null)
const isVideoPlaying = ref(false)
const isTheaterMode = ref(false)
const isFullScreenMode = ref(false)
const isMinPlayerMode = ref(false)
const volumeSlide = ref(null)
const volumeLevel = ref('low')
const currentTime = ref(0)
const duration = ref(0)
const captions = ref(null)
const isShowCaptions = ref(false)

const togglePlay = () => {
  const video = videoRef?.value
  if (!video) {
    return
  }
  video.paused ? video.play() : video.pause()
}

const toggleFullScreenMode = () => {
  if (document.fullscreenElement === null) {
    videoRef.value.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

const toggleMinPlayerMode = () => {
  if (isMinPlayerMode.value) {
    document.exitPictureInPicture()
  } else {
    videoRef.value.requestPictureInPicture()
  }
}

const toggleCaption = (e) => {
  const isHidden = captions.value.mode === 'hidden'
  isShowCaptions.value = isHidden
  captions.value.mode = isHidden ? 'showing' : 'hidden'
}

const handleKeyDown = (e) => {
  // current tab target
  const tagName = document.activeElement.tagName.toLowerCase()
  if (tagName === 'input') {
    return
  }
  if (tagName === 'button' && e.code.toLowerCase() === 'space') {
    return
  }
  switch (e.key.toLowerCase()) {
    case ' ':
    case 'k':
      togglePlay()
      break
    case 'f':
      toggleFullScreenMode()
      break
    case 't':
      isTheaterMode.value = !isTheaterMode.value
      break
    case 'i':
      toggleMinPlayerMode()
      break
    case 'm':
      toggleMuted()
      break
    case 'arrowleft':
    case 'j':
      skip(-5)
      break
    case 'arrowright':
    case 'l':
      skip(5)
      break
  }
}
const totalVideoTime = computed(() =>
  new Date(duration.value * 1000 - 1000 * 60 * 60 * 8).toString().slice(17, 24)
)
const currentVideoTime = computed(() =>
  new Date(currentTime.value * 1000 - 1000 * 60 * 60 * 8)
    .toString()
    .slice(17, 24)
)
const handleLoadeddata = (event) => {
  duration.value = event.target.duration
}

const handleTimeUpdate = (event) => {
  currentTime.value = event.target.currentTime
}

const skip = (second) => {
  const video = videoRef?.value
  video.currentTime += second
}

const handleFullScreenChange = () => {
  isFullScreenMode.value = Boolean(document.fullscreenElement)
}

const toggleMuted = () => {
  const video = videoRef?.value
  video.muted = !video.muted
}

const handleVolumeSlideInput = (e) => {
  const video = videoRef?.value
  video.volume = e.target.value
  video.muted = e.target.value === 0
}

const handleVolumeChange = () => {
  const video = videoRef?.value
  volumeSlide.value.value = video.volume
  if (video.muted || video.volume === 0) {
    volumeLevel.value = 'muted'
    volumeSlide.value.value = 0
  } else if (video.volume >= 0.5) {
    volumeLevel.value = 'high'
  } else {
    volumeLevel.value = 'low'
  }
}

const handleEnterPictureInPicture = () => {
  console.log('enter')
  isMinPlayerMode.value = true
}
const handleLeavePictureInPicture = () => {
  console.log('leave')
  isMinPlayerMode.value = false
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
  document.addEventListener('fullscreenchange', handleFullScreenChange)
  videoRef.value.addEventListener(
    'enterpictureinpicture',
    handleEnterPictureInPicture
  )
  videoRef.value.addEventListener(
    'leavepictureinpicture',
    handleLeavePictureInPicture
  )

  captions.value = videoRef.value.textTracks[0]
  captions.value.mode = 'hidden'
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown)
  document.removeEventListener('fullscreenchange', handleFullScreenChange)
  videoRef.value.removeEventListener(
    'enterpictureinpicture',
    handleEnterPictureInPicture
  )
  videoRef.value.removeEventListener(
    'leavepictureinpicture',
    handleLeavePictureInPicture
  )
})
</script>

<style scoped lang="scss">
.video-container {
  display: flex;
  position: relative;
  justify-content: center;
  margin-inline: auto;
  width: 90%;
  max-width: 1000px;

  video {
    width: 100%;
  }

  // &:focus-within -> if user press tab and focus any element in container. This style will be applied for.
  &:hover,
  &:focus-within,
  &.pause {
    .video-controls-containers {
      opacity: 1;
    }
  }

  &:before {
    position: absolute;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
    aspect-ratio: 6 / 1;
    width: 100%;
    pointer-events: none;
    content: '';
  }

  &.pause .pause-icon {
    display: none;
  }

  &:not(.pause) .play-icon {
    display: none;
  }

  &.theater,
  &.full-screen-section {
    width: 100%;
    max-width: initial;
  }

  &.theater {
    max-height: 90vh;
    .tall {
      display: none;
    }
  }

  &.caption .video-controls-containers button.captions-btn {
    border-bottom: 3px solid red;
  }

  &:not(.theater) .wide {
    display: none;
  }

  &.full-screen-section {
    max-height: 100vh;
    .open {
      display: none;
    }
  }
  &:not(.full-screen-section) .close {
    display: none;
  }

  &.full-screen-section {
    max-height: 100vh;
    .open {
      display: none;
    }
  }
  &:not(.full-screen-section) .close {
    display: none;
  }

  .video-controls-containers {
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    z-index: 100;
    transition: opacity 0.25s ease-in-out;
    width: 100%;
    color: white;

    .controls {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.25rem;
      button.wide-btn {
        width: 50px;
        text-align: center;
      }
    }
  }

  .volume-container {
    display: flex;
    align-items: center;

    &:hover .volume-slider,
    &:focus-within .volume-slider {
      transform: scaleX(1);
      width: 100%;
    }

    svg {
      width: 30px;
    }
  }

  .volume-slider {
    transform: scaleX(0);
    transform-origin: left;
    transition: width 0.15s ease-in-out, transform 0.15s ease-in-out;
    width: 0;
  }

  .volume-high-icon,
  .volume-low-icon,
  .volume-muted-icon {
    display: none;
  }

  &[data-volume-level='high'] .volume-high-icon {
    display: block;
  }
  &[data-volume-level='low'] .volume-low-icon {
    display: block;
  }
  &[data-volume-level='muted'] .volume-muted-icon {
    display: block;
  }

  .duration-container {
    display: flex;
    flex-grow: 1;
    align-items: center;
    gap: 0.25rem;
  }

  button.captions-btn {
    border-bottom: 3px solid transparent;
  }
}

button {
  all: initial;
  opacity: 0.85;
  transition: opacity 0.15s ease-in-out;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  width: 30px;
  height: 30px;
  color: inherit;
  font-size: 1.1rem;

  &:hover {
    opacity: 1;
  }
}
</style>
