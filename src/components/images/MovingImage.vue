<template>
  <div class="moving-img">
    <BaseImage
      :image-path="imgPath"
      caption="Caption!!"
      content="Please type something..."
    />
  </div>
</template>

<script setup>
import BaseImage from './BaseImage.vue'
import imgPath from '@/assets/images/bali.jpeg'
</script>

<style lang="scss">
.moving-img {
  .caption {
    bottom: 0;
    left: 0;
    transform: translateY(100%);
  }

  &:hover {
    .caption {
      opacity: 1;
      transform: translateY(0);
    }

    img {
      transform: translateY(-30%);
    }
  }
}
</style>
