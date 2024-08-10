import { ref, computed, onMounted } from 'vue'

function useCarousel(carouselRef) {
  let startX

  const distance = ref(0)
  const direction = computed(() => (distance.value > 0 ? 'left' : 'right'))
  const handleTouchStart = (event) => {
    console.log('touch start', carouselRef)
    startX = event.targetTouches[0].pageX
    console.log(event)
  }
  const handleTouchMove = (event) => {
    // console.log('touch move')
    const pageX = event.targetTouches[0].pageX
    distance.value = startX - pageX
  }
  const handleTouchEnd = (event) => {
    console.log('touch end')
  }

  onMounted(() => {
    console.log('mounted', carouselRef)
  })
  return {
    distance,
    direction,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  }
}

export default useCarousel
