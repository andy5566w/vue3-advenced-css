<template>
  <div class="MultiEditor">
    <div class="MultiEditor__video">
      <EditorVideo :src="src" />
    </div>
    <div class="MultiEditor__controls">
      <ZoomTimeline />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EditorVideo from './fragments/EditorVideo.vue'
import ZoomTimeline from './fragments/ZoomTimeline.vue'
import videoUrl from '@/assets/videos/cat-birthday.mp4'
const src = ref(videoUrl)
</script>

<style scoped lang="scss">
.MultiEditor {
  display: flex;
  flex-direction: column;

  &__video {
    max-width: 800px;
  }

  &__controls {
    height: 150px;
  }
}
</style>
