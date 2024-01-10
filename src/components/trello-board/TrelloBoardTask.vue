<script setup>
import { defineProps } from 'vue'
defineProps({
  title: String,
  id: String,
  createAt: Date,
})
</script>

<template>
  <div
    :title="createAt.toLocaleDateString()"
    class="task bg-white p-2 mb-2 rounded shadow-sm max-w-[250px]"
  >
    <span>
      {{ title }}
    </span>
  </div>
</template>

<style scoped lang="scss"></style>
