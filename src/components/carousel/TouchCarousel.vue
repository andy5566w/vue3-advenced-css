<template>
  <div class="carousel-container">
    <div
      class="wrap"
      ref="carouselRef"
      :style="{ '--translateX': translateX + 'px' }"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div class="wrap-item" v-for="{ path, name } in images" :key="name">
        <img :src="path" :alt="name" />
      </div>
    </div>
  </div>
</template>

<script setup>
import carousel1 from '@/assets/carousel/carousel1.jpeg'
import carousel2 from '@/assets/carousel/carousel2.jpeg'
import carousel3 from '@/assets/carousel/carousel3.jpeg'
import carousel4 from '@/assets/carousel/carousel4.jpeg'
import carousel5 from '@/assets/carousel/carousel5.jpeg'
import carousel6 from '@/assets/carousel/carousel6.jpeg'
import carousel7 from '@/assets/carousel/carousel7.jpeg'
import useCarousel from './compasables/useCarousel.js'
import { ref, computed } from 'vue'

const images = [
  {
    path: carousel1,
    name: 'carousel1',
  },
  {
    path: carousel2,
    name: 'carousel2',
  },
  {
    path: carousel3,
    name: 'carousel3',
  },
  {
    path: carousel4,
    name: 'carousel4',
  },
  {
    path: carousel5,
    name: 'carousel5',
  },
  {
    path: carousel6,
    name: 'carousel6',
  },
  {
    path: carousel7,
    name: 'carousel7',
  },
]
const carouselRef = ref(null)
const {
  isMoving,
  distance,
  currentIndex,
  handleTouchEnd,
  handleTouchMove,
  handleTouchStart,
} = useCarousel(carouselRef.value)

const translateX = computed(() => {
  if (!carouselRef.value || !distance.value) {
    return 0
  }
  if (isMoving.value) {
    return -carouselRef.value.clientWidth * currentIndex.value + distance.value
  }
  return -carouselRef.value.clientWidth * currentIndex.value
})
</script>

<style scoped lang="scss">
* {
  border: 1px solid red;
}
.carousel-container {
  width: 350px;
  overflow: hidden;
}
.wrap {
  --translateX: 0;
  display: flex;
  transform: translateX(var(--translateX));
  transition: all 0.2s;

  &-item {
    flex-grow: 1;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
