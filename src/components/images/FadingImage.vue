<template>
  <div class="fading-img">
    <BaseImage
      image-path="/src/assets/images/paris.jpeg"
      caption="Caption!!"
      content="Please type something..."
    />
  </div>
</template>

<script setup>
import BaseImage from './BaseImage.vue'
</script>

<style lang="scss">
.fading-img {
  .caption {
    top: 0;
    left: 0;
    height: 100%;
    opacity: 0;
  }

  &:hover {
    .caption {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.5);
    }

    img {
      transform: rotate(15deg) scale(1.3);
    }
  }
}
</style>
