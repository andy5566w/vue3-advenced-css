<template>
  <div class="score">
    Your current scores: {{ config.scores !== -1 ? config.scores : 0 }}
  </div>
  <div class="relative">
    <div class="panel bg-zinc-700/60" v-if="!config.isGameStart">
      <p class="text-lg font-bold mb-4 text-stone-300">{{ startMessages }}</p>
      <button
        class="start text-stone-400 focus:outline-0 hover:outline-0 hover:border-[#1a1a1a]"
        @click="handleGameStart"
      >
        Start
      </button>
    </div>
    <canvas ref="refCanvas"></canvas>
  </div>
</template>

<script setup>
import { Vector } from '../../js/Vector.js'
import Snake from '../../js/Snake.js'
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'

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
  scores: -1,
})
const refCanvas = ref(null)
let ctx = null
let snake = new Snake()
const startMessages = computed(() => {
  if (config.value.scores === -1) return 'Please press start button to join '
  return `Your got ${config.value.scores} scores, please try again`
})

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
  config.value.isGameStart = !(isOutBoundary || isCrashBody)
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
  if (config.value.isGameStart) {
    snake.update()
    config.value.foods.forEach((f, i) => {
      if (snake.head.equal(f)) {
        snake.maxLength++
        config.value.scores = config.value.scores + 100
        config.value.foods.splice(i, 1)
        generateFood()
      }
    })
    judgeSnakeAlive()
  }
  config.value.timer = setTimeout(() => {
    update()
  }, 50)
}

const handleWindowKeyDown = (e) => {
  const { key } = e
  snake.setDirection(key.replace('Arrow', ''))
}

const handleGameStart = () => {
  config.value.isGameStart = true
  snake = new Snake()
  config.value.scores = 0
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

<style scoped lang="scss">
.panel {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}
</style>
