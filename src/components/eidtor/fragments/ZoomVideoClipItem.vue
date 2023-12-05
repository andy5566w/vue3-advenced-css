<template>
  <div class="ZoomVideoClipItem" :style="zoomItemStyles"></div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { convertTimeIntoWidth } from '@/js/zoomUtils/zommUtils.js'

const props = defineProps({
  startTime: { type: Number, required: true },
  endTime: { type: Number, required: true },
})

const zoomItemStyles = computed(() => {
  return {
    width: convertTimeIntoWidth(props.endTime - props.startTime) + 'px',
  }
})
</script>

<style scoped lang="scss">
.ZoomVideoClipItem {
  background-color: #fff;
  height: 50px;
}
</style>
