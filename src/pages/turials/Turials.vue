<template>
  <section>
    <to-do-list />
  </section>
</template>

<script setup>
import ToDoList from '../../components/turials/ToDoList.vue'
</script>

<style scoped lang="scss">
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2f363e;
  min-height: 100vh;
}
</style>
