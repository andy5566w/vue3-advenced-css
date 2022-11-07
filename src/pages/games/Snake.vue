<template>
  <canvas ref="refCanvas"></canvas>
</template>

<script setup>
import { Vector } from '../../js/Vector.js'
import { ref, onMounted } from 'vue'

const config = ref({
  boxWidth: 12,
  boxColor: 'rgba(255,255,255,0.03)',
  bgColor: '#242424',
  boxGap: 2,
  gameWidth: 40,
  speed: 3,
  snake: null,
  foods: [],
})
const refCanvas = ref(null)
let ctx = null
const snake = {
  body: [],
  maxLength: 5,
  head: new Vector(0, 0),
  speed: new Vector(1, 0),
  direction: 'right',
  update() {
    const newHead = this.head.add(this.speed)
    this.body.push(this.head)
    // maybe while
    if (this.body.length > this.maxLength) {
      this.body.shift()
    }
    this.head = newHead
  },
  setDirection(direction = 'right') {
    let speed
    switch (direction.toLowerCase()) {
      case 'right':
        speed = new Vector(1, 0)
        break
      case 'left':
        speed = new Vector(-1, 0)
        break
      case 'up':
        speed = new Vector(0, 1)
        break
      case 'down':
        speed = new Vector(0, -1)
    }
    if (!speed) {
      console.log(`direction (${direction}) is invalid`)
      return
    }
    this.speed = speed
  },
}
const getPosition = (x, y) => {
  return new Vector(
    x * config.value.boxWidth + (x - 1) * config.value.boxGap,
    y * config.value.boxWidth + (y - 1) * config.value.boxGap
  )
}
const drawBlock = (vector, color) => {
  ctx.fillStyle = color
  const position = getPosition(vector.x, vector.y)
  ctx.fillRect(
    position.x,
    position.y,
    config.value.boxWidth,
    config.value.boxWidth
  )
}
const render = () => {
  ctx.fillStyle = config.value.bgColor
  ctx.fillRect(0, 0, refCanvas.value.width, refCanvas.value.height)
  const drawSnake = () => {
    snake.body.forEach((v) => {
      drawBlock(v, 'rgba(255,255,255,0.5)')
    })
  }
  for (let i = 0; i < config.value.gameWidth; i++) {
    for (let a = 0; a < config.value.gameWidth; a++) {
      drawBlock(new Vector(i, a), config.value.boxColor)
    }
  }

  drawSnake()
  window.requestAnimationFrame(() => {
    render()
  })
}

const update = () => {
  setTimeout(() => {
    update()
    snake.update()
  }, 300)
}

onMounted(() => {
  refCanvas.value.width = refCanvas.value.height =
    config.value.gameWidth * config.value.boxWidth +
    config.value.boxGap * (config.value.boxWidth - 1)
  ctx = refCanvas.value.getContext('2d')
  render()
  update()
})
</script>

<style scoped lang="scss"></style>
