<script setup>
const lists = [
  {
    name: { name: 'displayButton' },
    text: 'display button',
  },
  {
    name: { name: 'displayImg' },
    text: 'display image',
  },
]
</script>

<template>
  <div class="container">
    <ul class="flex items-center justify-center gap-4 py-4">
      <li class="capitalize" v-for="{ name, text } in lists" :key="text">
        <router-link tag="a" :to="name">{{ text }}</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<style scoped lang="scss">
li {
  &:not(:last-child) {
    padding-right: 1rem;
    border-right: 2px solid #646cff;
  }
}
</style>
