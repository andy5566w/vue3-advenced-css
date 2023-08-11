<template>
  <ul>
    <li
      v-for="{ name, frequency } in notes"
      :key="frequency"
      class="inline-block my-2"
    >
      <button @click="handleClick(frequency)" class="mx-1">
        {{ name }}
      </button>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
const audioContentext = new AudioContext()
const primaryGainControl = audioContentext.createGain()
primaryGainControl.gain.setValueAtTime(0.01, 0)
primaryGainControl.connect(audioContentext.destination)
const notes = ref([
  { name: 'C', frequency: 261.63 },
  { name: 'C#', frequency: 277.18 },
  { name: 'D', frequency: 293.66 },
  { name: 'D#', frequency: 311.13 },
  { name: 'E', frequency: 329.63 },
  { name: 'F', frequency: 349.23 },
  { name: 'F#', frequency: 369.99 },
  { name: 'G', frequency: 392.0 },
  { name: 'G#', frequency: 415.3 },
  { name: 'A', frequency: 440 },
  { name: 'A#', frequency: 466.16 },
  { name: 'B', frequency: 493.88 },
  { name: 'C', frequency: 523.25 },
])

const handleClick = (frequency) => {
  const noteOscillator = audioContentext.createOscillator()
  noteOscillator.type = 'square'
  noteOscillator.frequency.setValueAtTime(
    frequency,
    audioContentext.currentTime
  )

  noteOscillator.connect(primaryGainControl)
  noteOscillator.start()
  noteOscillator.stop(audioContentext.currentTime + 0.5)
}
</script>

<style></style>
