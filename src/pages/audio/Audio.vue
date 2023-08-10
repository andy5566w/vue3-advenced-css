<template>
  <button @click="handleStartWhiteNoise">start white noise</button>
  <button @click="handleBiQuad" class="mx-2">bi-quad</button>
  <button @click="handleKick">Kick sound</button>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const audioContentext = new AudioContext()
const whiteNoiseSource = ref(null)
const primaryGainControl = ref(null)

onMounted(() => {
  primaryGainControl.value = audioContentext.createGain()
  // gain: set audio volume，second argument is start time
  primaryGainControl.value.gain.setValueAtTime(0.05, 0)
  primaryGainControl.value.connect(audioContentext.destination)
})

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

const handleStartWhiteNoise = () => {
  // Web API prevent memory leak and then you need to re-initialize new white noise every time.
  whiteNoiseSource.value = buildWhiteNoise(5)
  whiteNoiseSource.value.start()
}

const handleBiQuad = () => {
  const snareFilter = audioContentext.createBiquadFilter()
  snareFilter.type = 'highpass'
  snareFilter.frequency.value = 500

  whiteNoiseSource.value = buildWhiteNoise(2)
  whiteNoiseSource.value.connect(snareFilter)
  whiteNoiseSource.value.start()
}

const handleKick = () => {
  const kickOscillator = audioContentext.createOscillator()

  kickOscillator.frequency.setValueAtTime(261.6, 0)
  kickOscillator.frequency.exponentialRampToValueAtTime(
    0.001,
    audioContentext.currentTime + 0.5
  )
  kickOscillator.connect(primaryGainControl.value)
  kickOscillator.start()
  console.log(audioContentext.currentTime)
  kickOscillator.stop(audioContentext.currentTime + 0.5)
}
</script>

<style></style>
