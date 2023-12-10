<template>
  <div class="ZoomVideoClipItem" :style="zoomItemStyles">
    <div class="ZoomVideoClipItem__imgs">
      <img
        v-for="{ key, dataUrl } in images"
        :key="key"
        :src="dataUrl"
        :alt="dataUrl"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed, watch, ref, reactive } from 'vue'
import {
  convertTimeIntoWidth,
  convertWidthIntoTime,
} from '@/js/zoomUtils/zommUtils.js'
import { useEditor } from '../../../store/editor.js'
import { round } from 'mathjs'

const editor = useEditor()
const images = reactive([])

const props = defineProps({
  startTime: { type: Number, required: true },
  endTime: { type: Number, required: true },
})

const itemWidth = computed(() => {
  return convertTimeIntoWidth(props.endTime - props.startTime)
})

const zoomItemStyles = computed(() => {
  return {
    width: itemWidth.value + 'px',
  }
})

const initialThumbs = () => {
  images.length = 0
  const img_width = 50

  let accumulationWidth = 0
  while (accumulationWidth < itemWidth.value) {
    const second = round(convertWidthIntoTime(accumulationWidth))
    images.push({
      key: Math.random().toString(16).slice(2),
      dataUrl: editor.thumbsMap[second],
    })
    accumulationWidth += img_width
  }
}

watch(
  () => editor.isReadyThumbs,
  (isReadY) => {
    if (isReadY) {
      initialThumbs()
    }
  },
  { immediate: true }
)
watch(() => editor.currentUnit, initialThumbs)
</script>

<style scoped lang="scss">
.ZoomVideoClipItem {
  height: 50px;
  &__imgs {
    display: flex;
  }
}
</style>
