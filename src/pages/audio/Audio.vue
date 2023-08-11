<template>
  <div class="volume">
    <p class="mr-2">音量 {{ volume }}</p>
    <input type="range" maxlength="100" v-model="volume" />
  </div>
  <div class="button">
    <button @click="handleStartWhiteNoise">white noise</button>
    <button @click="handleBiQuad" class="mx-2">pink noise</button>
    <button @click="clearBuffer" class="mx-2">stop</button>
  </div>
  <audio-note />
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import AudioNote from './AudioNote.vue'
const audioContentext = new AudioContext()
const whiteNoiseSource = ref(null)
const primaryGainControl = ref(null)
const volume = ref(0.05)

const changeVolume = () => {
  primaryGainControl.value = audioContentext.createGain()
  // gain: set audio volume，second argument is start time
  primaryGainControl.value.gain.setValueAtTime(volume.value, 0)
  primaryGainControl.value.connect(audioContentext.destination)
}

const buildWhiteNoise = (seconds = 10) => {
  const buffer = audioContentext.createBuffer(
    1,
    audioContentext.sampleRate * seconds,
    audioContentext.sampleRate
  )
  const channelData = buffer.getChannelData(0)
  for (let i = 0; i < buffer.length; i++) {
    channelData[i] = Math.random() * 2 - 1
  }

  const whiteNoiseSource = audioContentext.createBufferSource()
  whiteNoiseSource.connect(primaryGainControl.value)
  whiteNoiseSource.buffer = buffer
  return whiteNoiseSource
}

const clearBuffer = (buffer) => {
  if (!whiteNoiseSource.value) {
    return
  }
  whiteNoiseSource.value.stop()
  whiteNoiseSource.value = null
}

const handleStartWhiteNoise = () => {
  clearBuffer()
  // Web API prevent memory leak and then you need to re-initialize new white noise every time.
  whiteNoiseSource.value = buildWhiteNoise(5)
  whiteNoiseSource.value.start()
}

const handleBiQuad = () => {
  clearBuffer()
  const snareFilter = audioContentext.createBiquadFilter()
  snareFilter.type = 'highpass'
  snareFilter.frequency.value = 500

  whiteNoiseSource.value = buildWhiteNoise(2)
  whiteNoiseSource.value.connect(snareFilter)
  whiteNoiseSource.value.start()
}

onMounted(() => {
  changeVolume()
})

watch(volume, (volume) => {
  changeVolume(Number(volume) * 0.01)
})
</script>

<style scoped lang="scss">
.volume {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
}
</style>
