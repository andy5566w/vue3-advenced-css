<script setup>
// import HLS from 'hls.js'
// import { ref } from 'vue'
// import { onClickOutside } from '@vueuse/core'
//
// const target = ref('null')
//
// console.log(HLS.isSupported())

// onClickOutside(target, () => {
//   console.log('outside')
// })
</script>

<template>
  <video src=""></video>
  <div ref="target" class="box">Hello world</div>
  <div>Outside element</div>
</template>

<style scoped lang="scss">
.box {
  background-color: #fff;
  width: 300px;
  height: 300px;
}
</style>
