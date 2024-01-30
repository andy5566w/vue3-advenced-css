<template>
  <div>
    <button @click="increase">increase</button>
    {{ count }}
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(_, { expose }) {
    const count = ref(0)
    expose({ count })

    function increase() {
      count.value++
    }
    return { count, increase }
  },
}
</script>

<style></style>
