<template>
  <canvas ref="refCanvas" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
const refCanvas = ref(null)
let ctx = null,
  ww,
  wh
const canvasConfig = ref({
  ctx: null,
})

const drawCross = () => {
  if (!ctx) return
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(ww / 2, 0)
  ctx.lineTo(ww / 2, wh)
  ctx.moveTo(0, wh / 2)
  ctx.lineTo(ww, wh / 2)
  ctx.strokeStyle = '#ccc'
  ctx.stroke()
}

const clearCanvas = () => {
  if (!ctx) return
  ctx.clearRect(0, 0, ww, wh)
}

const render = () => {
  clearCanvas()
  drawCross()
  window.requestAnimationFrame(() => {
    render()
  })
}

onMounted(() => {
  refCanvas.value.width = ww = window.innerWidth
  refCanvas.value.height = wh = window.innerHeight
  ctx = refCanvas.value.getContext('2d')
  render()
})
</script>

<style lang="scss" scoped></style>
