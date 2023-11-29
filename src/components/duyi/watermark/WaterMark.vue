<template>
  <div class="watermark-container" ref="container">
    <slot />
  </div>
</template>
<script setup>
// https://www.bilibili.com/video/BV18c411972C/?spm_id_from=333.1007.tianma.1-1-1.click&vd_source=d45ec0638beff773cb15777eea2e0766
import { ref, defineProps, computed, onMounted, onUnmounted } from 'vue'
const container = ref(null)
let div,
  observer = null
const props = defineProps({
  text: { type: String, default: 'watermark' },
  fontSize: { type: Number, default: 40 },
  gap: { type: Number, default: 20 },
})

const getBackground = (props) => {
  return computed(() => {
    const canvas = document.createElement('canvas')
    const devicePixelRatio = window.devicePixelRatio || 1
    const fontSize = devicePixelRatio * props.fontSize
    const font = fontSize + 'px serif'
    const ctx = canvas.getContext('2d')

    ctx.font = font
    const { width } = ctx.measureText(props.text)
    const canvasSize = Math.max(100, width) + props.gap * devicePixelRatio

    canvas.width = canvasSize
    canvas.height = canvasSize

    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.rotate((Math.PI / 180) * -45)
    ctx.fillStyle = 'rgba(0,0,0,0.3)'
    ctx.font = font
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(props.text, 0, 0)

    return {
      base64: canvas.toDataURL(),
      size: canvasSize / devicePixelRatio,
    }
  })
}
const bg = getBackground(props)
const resetWatermark = () => {
  if (!container.value) {
    return
  }

  if (div) {
    div.remove()
  }

  const { base64, size } = bg.value
  div = document.createElement('div')
  div.style.position = 'absolute'
  div.style.backgroundSize = `${size}px ${size}px`
  div.style.backgroundImage = `url(${base64})`
  div.style.backgroundRepeat = 'repeat'
  div.style.zIndex = 99999
  div.style.inset = 0

  container.value.appendChild(div)
}

observer = new MutationObserver((entries) => {
  for (const entry of entries) {
    const isBackgroundImageDeleted = entry.removedNodes[0] === div
    const changedAttribute = entry.target === div
    if (isBackgroundImageDeleted || changedAttribute) {
      resetWatermark()
    }
  }
})
onMounted(() => {
  resetWatermark()

  observer.observe(container.value, {
    attributes: true,
    childList: true,
    subtree: true,
  })
})

onUnmounted(() => {
  observer.disconnect()
})
</script>

<style scoped lang="scss">
.watermark-container {
  position: relative;
}
</style>
