<template>
  <div class="delay-img">
    <BaseImage
      :image-path="imgPath"
      caption="Caption!!"
      content="Please type something..."
    />
  </div>
</template>

<script setup>
import BaseImage from './BaseImage.vue'
import imgPath from '@/assets/images/beach.jpeg'
</script>

<style lang="scss">
.delay-img {
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #006266;
    opacity: 0.5;
    transition: all 0.25s;
    transform: translateY(100%);
    transition-delay: 0.25s;
    z-index: 1;
  }

  .caption {
    transition: all 0.25s;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: transparent;
    transform: translateY(-20px);
    z-index: 2;
    p {
      background-color: #ae895d;
      margin: 0 auto;
      border-radius: 5px;
      padding: 3px 10px;
    }
  }

  &:hover {
    &:before {
      transform: translateY(0);
      transition-delay: 0s;
    }

    .caption {
      opacity: 1;
      transform: translateY(0);
      transition-delay: 0.25s;
    }
  }
}
</style>
