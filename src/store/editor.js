import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const UNITS = [
  { width: 100, time: 5, unit: '5 second' },
  { width: 150, time: 1, unit: '1 second' },
  { width: 100, time: 1, unit: '1 second' },
]

export const useEditor = defineStore('editor', () => {
  const currentTime = ref(0)
  const currentUnitIndex = ref(0)
  const units = ref(UNITS)
  const videoDuration = ref(0)

  const currentUnit = computed(() => {
    return units.value[currentUnitIndex.value]
  })

  const changeCurrentTime = (time) => {
    currentTime.value = time
  }

  const changeVideoDuration = (duration) => {
    videoDuration.value = duration
  }
  return {
    currentTime,
    units,
    currentUnit,
    videoDuration,
    changeCurrentTime,
    changeVideoDuration,
  }
})
