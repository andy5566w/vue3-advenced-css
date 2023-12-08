<template>
  <div class="ZoomTimeLine">
    <div class="ZoomTimeLine__thumbnails"></div>
  </div>
</template>
<script setup>
import { useEditor } from '@/store/editor.js'
const editor = useEditor()
</script>

<style scoped lang="scss">
.ZoomTimeLine {
  background-color: #ccc;
  height: 150px;
  overflow: auto;

  &__thumbnails {
  }
}
</style>
