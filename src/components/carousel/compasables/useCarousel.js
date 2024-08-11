import { ref, computed, onMounted } from 'vue'

function useCarousel() {
  let startX

  const distance = ref(0)
  const direction = computed(() => (distance.value > 0 ? 'left' : 'right'))
  const isMoving = ref(false)
  const currentIndex = ref(0)
  const handleTouchStart = (event) => {
    startX = event.targetTouches[0].pageX
    isMoving.value = true
  }
  const handleTouchMove = (event) => {
    const pageX = event.targetTouches[0].pageX
    distance.value = pageX - startX
  }
  const handleTouchEnd = (event) => {
    isMoving.value = false
    if (direction.value === 'right') {
      currentIndex.value++
    } else {
      currentIndex.value--
    }
  }

  return {
    distance,
    isMoving,
    currentIndex,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  }
}

export default useCarousel
