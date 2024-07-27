<template>
  <div class="container">
    <button class="container__btn" @click="moveToLeft"><left-icon /></button>
    <div class="container__imgs">
      <div ref="containerImgRef" class="imgs">
        <img
          v-for="{ path, name } in images"
          :key="name"
          :src="path"
          :alt="name"
          class="container__img"
        />
      </div>
    </div>
    <div class="dotted">
      <span
        v-for="({ name }, index) in images"
        @click="moveTo(index)"
        :key="name"
        :class="{ active: index === currentIndex }"
      ></span>
    </div>
    <button class="container__btn" @click="moveToRight"><right-icon /></button>
  </div>
</template>
<script setup>
// ref https://github.com/jtwang7/JavaScript-Note/issues/2
import { ref, onMounted } from 'vue'
import carousel1 from '@/assets/carousel/carousel1.jpeg'
import carousel2 from '@/assets/carousel/carousel2.jpeg'
import carousel3 from '@/assets/carousel/carousel3.jpeg'
import carousel4 from '@/assets/carousel/carousel4.jpeg'
import carousel5 from '@/assets/carousel/carousel5.jpeg'
import carousel6 from '@/assets/carousel/carousel6.jpeg'
import carousel7 from '@/assets/carousel/carousel7.jpeg'
import RightIcon from './icon/RightIcon.vue'
import LeftIcon from './icon/LeftIcon.vue'

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

const containerImgRef = ref(null)
const currentIndex = ref(0)

const moveTo = (index) => {
  const containerWidth = 500
  containerImgRef.value.style.transform = `translateX(${
    -containerWidth * index
  }px)`
  containerImgRef.value.style.transition = `0.2s`
  currentIndex.value = index
}

const duplicatedFirstAndLast = () => {
  const firstImgElement =
    containerImgRef.value.firstElementChild.cloneNode(true)
  const lastImgElement = containerImgRef.value.lastElementChild.cloneNode(true)
  lastImgElement.style.position = 'absolute'
  lastImgElement.style.left = '-100%'
  lastImgElement.style.height = '100%'
  lastImgElement.style.zIndex = '-1'

  containerImgRef.value.insertAdjacentElement('afterbegin', lastImgElement)
  containerImgRef.value.insertAdjacentElement('beforeend', firstImgElement)
}
const moveToRight = () => {
  if (currentIndex.value === images.length - 1) {
    containerImgRef.value.style.transform = `translateX(100%)`
    containerImgRef.value.style.transition = `none`
    containerImgRef.value.clientHeight
    moveTo(0)
  } else {
    moveTo(currentIndex.value + 1)
  }
}

const moveToLeft = () => {
  if (currentIndex.value === 0) {
    containerImgRef.value.style.transform = `translateX(-${
      images.length * 500
    }px)`
    containerImgRef.value.style.transition = `none`
    containerImgRef.value.clientHeight
    moveTo(images.length - 1)
  } else {
    moveTo(currentIndex.value - 1)
  }
}

onMounted(() => {
  duplicatedFirstAndLast()
})
</script>

<style scoped lang="scss">
.container {
  position: relative;

  &__imgs {
    position: relative;
    width: 500px;
    overflow: hidden;
  }

  .imgs {
    display: flex;
  }

  &__btn {
    position: absolute;
    top: 50%;
    z-index: 1;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 16px;
    user-select: none;

    &:active,
    &:focus {
      outline: none;
    }

    &:first-of-type {
      left: 0;
      translate: -150% -50%;
    }

    &:last-of-type {
      left: 100%;
      translate: 150% -50%;
    }
  }

  .dotted {
    display: flex;
    position: absolute;
    bottom: 0;
    justify-content: center;
    align-items: center;
    gap: 10px;
    translate: 0 100%;
    width: 100%;
    height: 50px;
    span {
      transition: 0.2s;
      cursor: pointer;
      border-radius: 50%;
      background-color: #5c5a5a;
      width: 15px;
      height: 15px;

      &.active {
        background-color: snow;
      }
    }
  }
}
</style>
