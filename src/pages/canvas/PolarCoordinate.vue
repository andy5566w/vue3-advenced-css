<template>
  <canvas ref="refCanvas" class="canvas" @mousemove="handleMouseMove"></canvas>
</template>

<script setup>
import { onMounted, ref, getCurrentInstance } from 'vue'
import { Vector } from '../../js/Vector'
const refCanvas = ref(null)
const instance = getCurrentInstance()
console.log(instance)
let ctx = null,
  ww,
  wh,
  centerV,
  testVector
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
  drawCircle(centerV)
  if (testVector) {
    drawLine(centerV, testVector)
  }
  window.requestAnimationFrame(() => {
    render()
  })
}

const handleMouseMove = (event) => {
  const { offsetX, offsetY } = event
  const mouseVector = new Vector(offsetX, offsetY).sub(centerV)
  testVector = new Vector(offsetX, offsetY)
}

const drawCircle = (v) => {
  ctx.save()
  ctx.translate(v.x, v.y)
  ctx.beginPath()
  ctx.arc(0, 0, 100, 0, Math.PI * 2)
  ctx.strokeStyle = 'red'
  ctx.stroke()
  ctx.restore()
}

const drawLine = (startPoint, endPoint) => {
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(startPoint.x, startPoint.y)
  ctx.rotate(endPoint.angle)
  ctx.lineTo(endPoint.length, 0)
  ctx.stroke()
  ctx.restore()
}

onMounted(() => {
  refCanvas.value.width = ww = 700
  refCanvas.value.height = wh = 500
  centerV = new Vector(ww / 2, wh / 2)
  ctx = refCanvas.value.getContext('2d')
  render()
})
</script>

<style lang="scss" scoped>
.canvas {
  border: 1px solid red;
  width: 100%;
  height: 100%;
}
</style>
