import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const UNITS = [
  { width: 80, time: 10, unit: '5 second' },
  { width: 100, time: 10, unit: '10 second' },
  { width: 100, time: 5, unit: '5 second' },
  { width: 80, time: 1, unit: '1 second' },
  { width: 100, time: 1, unit: '1 second' },
  { width: 120, time: 1, unit: '1 second' },
]

export const useEditor = defineStore('editor', () => {
  const currentTime = ref(0)
  const currentUnitIndex = ref(0)
  const units = ref(UNITS)
  const videoDuration = ref(0)
  const scrollLeft = ref(0)

  const currentUnit = computed(() => {
    return units.value[currentUnitIndex.value]
  })

  const deltaDistance = computed(() => {
    return scrollLeft.value % currentUnit.value.width
  })

  const changeCurrentTime = (time) => {
    currentTime.value = time
  }

  const changeVideoDuration = (duration) => {
    videoDuration.value = duration
  }

  const changeCurrentUnitIndex = (index) => {
    currentUnitIndex.value = index
  }

  const changeScrollLeft = (width) => {
    scrollLeft.value = width
  }

  return {
    currentTime,
    units,
    currentUnit,
    videoDuration,
    scrollLeft,
    deltaDistance,
    changeCurrentTime,
    changeVideoDuration,
    changeCurrentUnitIndex,
    changeScrollLeft,
  }
})
