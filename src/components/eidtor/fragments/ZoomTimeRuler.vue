<template>
  <div class="ZoomTimeRulerWrapper" ref="rulerWrapper">
    <canvas ref="canvasRef" />
  </div>
</template>

<script setup>
import { useEditor } from '../../../store/editor.js'
import { Vector } from '../../../js/Vector.js'
import { ref, onMounted, watch } from 'vue'
import { convertWidthIntoTime } from '../../../js/zoomUtils/zommUtils.js'

const canvasRef = ref(null)
const rulerWrapper = ref(null)
const editor = useEditor()
const V = new Vector(0, 0)
let canvasWidth = ref(0)
let canvasHeight = ref(0)
let ctx = null

const initialCanvas = () => {
  canvasWidth.value = canvasRef.value.width = rulerWrapper.value.clientWidth
  canvasHeight.value = canvasRef.value.height = rulerWrapper.value.clientHeight
  ctx = canvasRef.value.getContext('2d')
  ctx.strokeStyle = '#9397A6'
  ctx.fillStyle = '#9397A6'
  ctx.font = '12px Roboto'

  const width = editor.currentUnit.width
  V.set(width, 0)
}

const buildRuler = () => {
  window.requestAnimationFrame(() => {
    ctx.clearRect(0, 0, canvasWidth.value, canvasHeight.value)
    const width = editor.currentUnit.width
    ctx.save()
    ctx.translate(-editor.deltaDistance, 0)
    const startIndex = Math.floor(editor.scrollLeft / width)
    const endIndex = Math.ceil((editor.scrollLeft + canvasWidth.value) / width)
    for (let i = startIndex; i < endIndex; i++) {
      ctx.beginPath()
      drawLine(10)
      drawUnit(i)
      ctx.stroke()
      ctx.translate(V.x, V.y)
    }
    ctx.restore()
  })
}

const drawUnit = (i) => {
  const currentTime = convertWidthIntoTime(
    i * editor.currentUnit.width + editor.scrollLeft
  )
  const text = `${new Date(currentTime * 1000).toISOString().substring(11, 19)}`
  ctx.fillText(text, -ctx.measureText(text).width / 2, 20)
}

const drawLine = (H) => {
  ctx.moveTo(0, 0)
  ctx.lineTo(0, H)
}

onMounted(() => {
  initialCanvas()
  buildRuler()
})

watch(
  () => editor.scrollLeft,
  () => {
    buildRuler()
  }
)
watch(
  () => editor.currentUnit,
  (currentUnit) => {
    V.set(currentUnit.width, 0)
    buildRuler()
  }
)
</script>

<style scoped lang="scss">
.ZoomTimeRulerWrapper {
  background-color: #28292e;
  width: 100%;
  height: 45px;
}
</style>
