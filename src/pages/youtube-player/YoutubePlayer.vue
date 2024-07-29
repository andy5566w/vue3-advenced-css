<template>
  <div class="video-container">
    <video :src="videoUrl" controls></video>
  </div>
</template>

<script setup>
import videoUrl from '@/assets/videos/cat-birthday.mp4'
</script>

<style scoped lang="scss">
.video-container {
  display: flex;
  justify-content: center;
  margin-inline: auto;
  width: 90%;
  max-width: 1000px;

  video {
    width: 100%;
  }
}
</style>
