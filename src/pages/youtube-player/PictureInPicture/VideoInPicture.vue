<script setup>
import { onMounted, ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const target = ref(null)
const isDisabled = ref(true)
const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    isDisabled.value = isIntersecting
  }
)

onMounted(() => {
  const player = new Player({
    id: 'mse',
    url: 'http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4',
  })
})
</script>

<template>
  <div id="small"></div>

  <div class="bigBox">
    <Teleport to="#small" :disabled="isDisabled">
      <div id="mse" ref="target"></div>
    </Teleport>
  </div>

  <!--  for observer-->
  <div class="observerContainer" id="videoContainer" ref="target"></div>

  <!--  simulate scroll-->
  <div style="height: 300vh"></div>
</template>

<style scoped lang="scss">
#small {
  position: fixed;
  right: 0;
  bottom: 0;
  border: 1px solid #ccc;
  aspect-ratio: 16/9;
}
</style>
