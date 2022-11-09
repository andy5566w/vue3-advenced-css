<template>
  <canvas ref="refCanvas"></canvas>
</template>

<script setup>
import { Vector } from '../../js/Vector.js'
import Snake from '../../js/Snake.js'
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const config = ref({
  boxWidth: 12,
  boxColor: 'rgba(255,255,255,0.03)',
  bgColor: '#242424',
  boxGap: 2,
  gameWidth: 40,
  speed: 3,
  foods: [],
  timer: -1,
  isGameStart: false,
})
const refCanvas = ref(null)
let ctx = null
const snake = new Snake()
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

const generateFood = () => {
  const foodVector = new Vector(
    Math.floor(Math.random() * config.value.gameWidth),
    Math.floor(Math.random() * config.value.gameWidth)
  )
  let isDuplicated = false
  for (let i = 0; i < snake.body.length; i++) {
    if (snake.body[i].equal(foodVector)) {
      isDuplicated = true
      break
    }
  }
  if (isDuplicated) {
    generateFood()
    return
  }
  config.value.foods.push(foodVector)
}

const judgeSnakeAlive = () => {
  let isOutBoundary =
    snake.head.x >= config.value.gameWidth ||
    snake.head.x < 0 ||
    snake.head.y >= config.value.gameWidth ||
    snake.head.y < 0
  let isCrashBody = snake.body.some((b) => b.equal(snake.head))
  config.value.isGameStart = isOutBoundary || isCrashBody
}

const render = () => {
  if (!refCanvas.value) return
  ctx.fillStyle = config.value.bgColor
  ctx.fillRect(0, 0, refCanvas.value.width, refCanvas.value.height)
  const drawSnake = () => {
    snake.body.forEach((v) => {
      drawBlock(v, 'rgba(255,255,255,0.5)')
    })
  }
  const drawFood = () => {
    config.value.foods.forEach((f) => {
      drawBlock(f, 'red')
    })
  }

  for (let i = 0; i < config.value.gameWidth; i++) {
    for (let a = 0; a < config.value.gameWidth; a++) {
      drawBlock(new Vector(i, a), config.value.boxColor)
    }
  }

  drawSnake()
  drawFood()
  window.requestAnimationFrame(() => {
    render()
  })
}

const update = () => {
  if (!config.value.isGameStart) {
    snake.update()
    config.value.foods.forEach((f, i) => {
      if (snake.head.equal(f)) {
        snake.maxLength++
        config.value.foods.splice(i, 1)
        generateFood()
      }
    })
    judgeSnakeAlive()
  }
  config.value.timer = setTimeout(() => {
    update()
  }, 150)
}

const handleWindowKeyDown = (e) => {
  e.preventDefault()
  const { key } = e
  snake.setDirection(key.replace('Arrow', ''))
}

onMounted(() => {
  window.addEventListener('keydown', handleWindowKeyDown)
  refCanvas.value.width = refCanvas.value.height =
    config.value.gameWidth * config.value.boxWidth +
    config.value.boxGap * (config.value.gameWidth - 1)
  ctx = refCanvas.value.getContext('2d')
  nextTick(() => {
    generateFood()
    render()
    update()
  })
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleWindowKeyDown)
  clearTimeout(config.value.timer)
})
</script>

<style scoped lang="scss"></style>
