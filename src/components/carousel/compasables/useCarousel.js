import { ref, computed, onMounted } from 'vue'

const handleWheel = (event) => {
  event.preventDefault()
}

function useCarousel() {
  let startX

  const distance = ref(0)
  const direction = computed(() => (distance.value > 0 ? 'left' : 'right'))
  const isMoving = ref(false)
  const currentIndex = ref(0)
  const text = ref([])
  const handleTouchStart = (event) => {
    startX = event.targetTouches[0].pageX
    isMoving.value = true
    text.value.push('start')
  }
  const handleTouchMove = (event) => {
    const pageX = event.targetTouches[0].pageX
    distance.value = pageX - startX
  }
  const handleTouchEnd = (event) => {
    text.value.push('end')
    isMoving.value = false
    if (direction.value === 'right' && currentIndex.value !== 7) {
      currentIndex.value++
    } else if (currentIndex.value !== 0) {
      currentIndex.value--
    }
    console.log(text.value)
  }

  return {
    text,
    distance,
    isMoving,
    currentIndex,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  }
}

export default useCarousel
