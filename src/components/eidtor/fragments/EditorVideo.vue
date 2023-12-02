<template>
  <video @loadedmetadata="handleLoadMetaData" controls>
    <source :src="props.src" />
  </video>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
})

const handleLoadMetaData = (e) => {
  console.log(e)
}
</script>

<style scoped lang="scss">
video {
  aspect-ratio: 16 / 9;
  width: 100%;
}
</style>
