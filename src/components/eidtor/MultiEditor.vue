<template>
  <div class="MultiEditor">
    <div class="MultiEditor__video">
      <EditorVideo :src="src" />
    </div>
    <div class="MultiEditor__controls">
      <!--      <ZoomTimeline />-->
      <EditorControls :max="editor.units.length - 1" />
      <div class="track-body">
        <ZoomVideoClipItem :start-time="0" :end-time="editor.videoDuration" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EditorVideo from './fragments/EditorVideo.vue'
import EditorControls from './fragments/EditorControls.vue'
import ZoomTimeline from './fragments/ZoomTimeline.vue'
import ZoomVideoClipItem from './fragments/ZoomVideoClipItem.vue'
import videoUrl from '@/assets/videos/cat-birthday.mp4'
import { useEditor } from '../../store/editor.js'

const src = ref(videoUrl)
const editor = useEditor()
</script>

<style scoped lang="scss">
.MultiEditor {
  display: flex;
  flex-direction: column;

  &__video {
    margin: 0 auto;
    max-width: 800px;
  }

  &__controls {
    height: 150px;
  }

  .track-body {
    overflow: auto;
  }
}
</style>
