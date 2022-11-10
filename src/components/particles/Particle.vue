<template>
  <canvas
    ref="refCanvas"
    width="100%"
    height="100%"
    @mousemove="handleMouseMove"
  ></canvas>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Vector } from '../../js/Vector.js'
import Particle from '../../js/Particle.js'
const refCanvas = ref(null)
let ctx = null
const particles = []
const mousePosition = new Vector()

const handleMouseMove = (e) => {
  const { x, y } = e
  mousePosition.set(x, y)
  while (particles.length > 100) {
    particles.shift()
  }
  particles.push(
    new Particle({
      p: mousePosition.clone(),
      ctx,
      border: { h: refCanvas.value.height, w: refCanvas.value.width },
    })
  )
}

const initialCanvas = () => {
  refCanvas.value.height = window.innerHeight
  refCanvas.value.width = window.innerWidth

  console.log(window.innerHeight)
  ctx = refCanvas.value.getContext('2d')
}

const render = () => {
  ctx.fillStyle = '#242424'
  ctx.fillRect(0, 0, refCanvas.value.width, refCanvas.value.height)

  particles.forEach((p) => {
    p.draw()
  })
  window.requestAnimationFrame(render)
}

const update = () => {
  particles.forEach((p) => {
    p.update()
  })
}

onMounted(() => {
  initialCanvas()
  render()
  setInterval(() => {
    update()
  }, 1000 / 30)
})
</script>

<style scoped lang="scss">
canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
