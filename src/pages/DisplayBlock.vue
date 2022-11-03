<template>
  <div class="container">
    <ul class="flex items-center justify-center gap-4 py-4">
      <li class="capitalize" v-for="{ name, text } in lists" :key="text">
        <router-link tag="a" :to="name">{{ text }}</router-link>
      </li>
    </ul>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

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
  {
    name: { name: 'displayManu' },
    text: 'display menus',
  },
  {
    name: { name: 'displaySpecialAnimation' },
    text: 'display special animation',
  },
]
</script>

<style scoped lang="scss">
li {
  &:not(:last-child) {
    border-right: 2px solid #646cff;
    padding-right: 1rem;
  }
}
</style>
