<template>
  <img v-for="{ path, name } in images" :key="name" :src="path" :alt="name" />
</template>
<script setup>
import carousel1 from '@/assets/carousel/carousel1.jpeg'
import carousel2 from '@/assets/carousel/carousel2.jpeg'
import carousel3 from '@/assets/carousel/carousel3.jpeg'
import carousel4 from '@/assets/carousel/carousel4.jpeg'
import carousel5 from '@/assets/carousel/carousel5.jpeg'
import carousel6 from '@/assets/carousel/carousel6.jpeg'
import carousel7 from '@/assets/carousel/carousel7.jpeg'

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
</script>

<style scoped lang="scss"></style>
