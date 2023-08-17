<template>
  <canvas ref="refCanvas" class="canvas" @mousemove="handleMouseMove"></canvas>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Vector } from '../../js/Vector'
const refCanvas = ref(null)
const enemies = ref([
  { r: 105, angle: 45 },
  { r: 80, angle: 80 },
  { r: 20, angle: -145 },
  { r: 120, angle: 100 },
  { r: 100, angle: -30 },
])
let ctx = null,
  ww,
  wh,
  centerV,
  mouseVector,
  mouseDelta
const canvasConfig = ref({
  ctx: null,
})

const degToPi = Math.PI / 180

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
  if (mouseVector) {
    drawLine(centerV, mouseVector)
    drawCircle(mouseVector)
    drawAngle(mouseVector)
    drawRadius(mouseVector)
    drawFanArea(mouseVector)
    drawEnemy()
  }
  window.requestAnimationFrame(() => {
    render()
  })
}

const handleMouseMove = (event) => {
  const { offsetX, offsetY } = event
  mouseVector = new Vector(offsetX, offsetY)
  mouseDelta = mouseVector.sub(centerV)
}

const drawFanArea = (v) => {
  const delta = v.sub(centerV)
  ctx.save()
  ctx.beginPath()
  ctx.translate(centerV.x, centerV.y)
  ctx.moveTo(0, 0)
  ctx.rotate(delta.angle - 10 * degToPi)
  ctx.lineTo(delta.length, 0)
  ctx.rotate(20 * degToPi)
  ctx.lineTo(delta.length, 0)
  ctx.fillStyle = '#ccc'
  ctx.fill()
  ctx.restore()
}

const drawCircle = (v) => {
  const delta = v.sub(centerV)
  ctx.save()
  ctx.beginPath()
  ctx.arc(centerV.x, centerV.y, delta.length, 0, Math.PI * 2)
  ctx.strokeStyle = 'red'
  ctx.stroke()
  ctx.restore()
}

const drawRadius = (v) => {
  const delta = v.sub(centerV)
  ctx.save()
  ctx.translate(centerV.x, centerV.y)
  ctx.beginPath()
  ctx.fillStyle = '#fff'
  ctx.fillText(`R: ${delta.length}`, delta.x + 10, delta.y + 10)
  ctx.restore()
}

const drawAngle = (v) => {
  const delta = v.sub(centerV)
  ctx.save()
  ctx.translate(centerV.x, centerV.y)
  ctx.beginPath()
  ctx.fillStyle = '#fff'
  ctx.fillText(`${parseInt(delta.angle / degToPi)} 度`, 10, -10)
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

const drawEnemy = () => {
  ctx.save()
  ctx.translate(centerV.x, centerV.y)
  enemies.value.forEach(({ r, angle }) => {
    ctx.save()
    ctx.beginPath()
    ctx.rotate(angle * degToPi)
    ctx.translate(r, 0)
    ctx.arc(0, 0, 5, 0, Math.PI * 2)
    let color = 'white'
    const isInRange =
      Math.abs(angle * degToPi - mouseDelta.angle) <= 10 * degToPi
    const isOverHeight = mouseDelta.length > r
    if (isInRange && isOverHeight) {
      color = 'yellow'
    }
    ctx.fillStyle = color
    ctx.fill()
    ctx.restore()
  })
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
