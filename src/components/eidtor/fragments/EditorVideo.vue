<template>
  <video
    @loadedmetadata="handleLoadMetaData"
    @timeupdate="handleTimeUpdate"
    controls
  >
    <source :src="props.src" />
  </video>
</template>

<script setup>
import { defineProps } from 'vue'
import { useEditor } from '@/store/editor.js'
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
})

const editor = useEditor()

const handleLoadMetaData = (e) => {
  editor.changeVideoDuration(e.target.duration)
}

const handleTimeUpdate = (e) => {
  editor.changeCurrentTime(e.target.currentTime)
}
</script>

<style scoped lang="scss">
video {
  aspect-ratio: 16 / 9;
  width: 100%;
}
</style>
