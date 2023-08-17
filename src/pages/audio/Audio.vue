<template>
  <div class="volume">
    <p class="mr-2">音量 {{ volume }}</p>
    <input type="range" maxlength="100" v-model="volume" />
  </div>
  <div class="button">
    <button @click="handleWhiteNoise">white noise</button>
    <button @click="handlePinkNoise" class="mx-2">pink noise</button>
  </div>
  <audio-note />
  <reader-wav />
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import AudioNote from './AudioNote.vue'
import ReaderWav from './ReaderWav.vue'
const audioContentext = new AudioContext()
const whiteNoiseSource = ref(null)
const primaryGainControl = ref(null)
const volume = ref(50)

const changeVolume = (volume) => {
  primaryGainControl.value = audioContentext.createGain()
  // gain: set audio volume，second argument is start time
  primaryGainControl.value.gain.setValueAtTime(volume, 0)
  primaryGainControl.value.connect(audioContentext.destination)
}

const buildWhiteNoiseBuffer = (seconds = 5) => {
  const buffer = audioContentext.createBuffer(
    1,
    audioContentext.sampleRate * seconds,
    audioContentext.sampleRate
  )
  const channelData = buffer.getChannelData(0)
  for (let i = 0; i < buffer.length; i++) {
    channelData[i] = Math.random() * 2 - 1
  }
  return buffer
}

const buildWhiteNoise = () => {
  const whiteNoiseSource = audioContentext.createBufferSource()
  whiteNoiseSource.connect(primaryGainControl.value)
  whiteNoiseSource.buffer = buildWhiteNoiseBuffer()
  return whiteNoiseSource
}

const handleWhiteNoise = () => {
  if (primaryGainControl.value.gain.value < +volume.value) {
    changeVolume(Number(volume.value) * 0.01)
  }
  // Web API prevent memory leak and then you need to re-initialize new white noise every time.
  whiteNoiseSource.value = buildWhiteNoise(10)
  whiteNoiseSource.value.start()
  whiteNoiseSource.value.stop(audioContentext.currentTime + 5)
}

const handlePinkNoise = () => {
  if (primaryGainControl.value.gain.value < +volume.value) {
    changeVolume(Number(volume.value) * 0.01)
  }
  const pinkNoiseSource = audioContentext.createBufferSource()
  pinkNoiseSource.buffer = buildWhiteNoiseBuffer()
  primaryGainControl.value.gain.linearRampToValueAtTime(
    0,
    audioContentext.currentTime + 5
  )
  pinkNoiseSource.connect(primaryGainControl.value)
  pinkNoiseSource.start()
  pinkNoiseSource.stop(audioContentext.currentTime + 3)
}

onMounted(() => {
  changeVolume(0.02)
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
