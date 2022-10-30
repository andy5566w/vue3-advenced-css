<template>
  <div class="imageContainer">
    <img :src="imagePath" alt="tower" />
    <div class="caption">
      <h2 class="uppercase font-bold text-3xl">{{ caption }}</h2>
      <p class="text-xl">{{ content }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  imagePath: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
    validator(value) {
      return ['move', 'fade'].includes(value)
    },
  },
})

switch (props.mode) {
}
</script>

<style lang="scss">
.imageContainer {
  position: relative;
  height: 500px;
  overflow: hidden;
  img {
    height: 100%;
    transition: all 0.5s;
  }

  .caption {
    position: absolute;
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.5s;
  }
}
</style>
