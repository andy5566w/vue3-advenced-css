<template>
  <div class="container">
    <div
      class="box"
      v-slide-in
      v-for="(box, index) in boxes"
      :key="box"
      :index="index"
    >
      {{ box }}
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const boxes = ref(15)
</script>

<style scoped lang="scss">
.container {
  $max: 16;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .box {
    background-color: gray;
    width: 500px;
    height: 300px;
    color: black;
    @for $i from 1 to $max {
      &:nth-child(#{$i}) {
        @if $i % 2 == 0 {
          background-color: darkred;
        }
        @if $i % 3 == 0 {
          background-color: yellowgreen;
        }
        @if $i % 5 == 0 {
          background-color: blueviolet;
        }
        @if $i % 7 == 0 {
          background-color: deepskyblue;
        }
      }
    }
  }
}
</style>
