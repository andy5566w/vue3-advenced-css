<template>
  <div class="video-container" :class="{ pause: !isVideoPlaying }">
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
      </div>
    </div>
    <video
      :src="videoUrl"
      ref="videoRef"
      @play="isVideoPlaying = true"
      @pause="isVideoPlaying = false"
      @click="togglePlay"
    ></video>
  </div>
</template>

<script setup>
import videoUrl from '@/assets/videos/cat-birthday.mp4'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const playPauseButton = ref(null)
const videoRef = ref(null)
const isVideoPlaying = ref(false)

const togglePlay = () => {
  const video = videoRef?.value
  if (!video) {
    return
  }
  video.paused ? video.play() : video.pause()
}

const handleKeyDown = (e) => {
  switch (e.key.toLowerCase()) {
    case ' ':
    case 'k':
      togglePlay()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown)
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

  .video-controls-containers {
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    z-index: 100;
    transition: opacity 0.25s ease-in-out;
    color: white;

    .controls {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.25rem;

      button {
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
    }
  }
}
</style>
