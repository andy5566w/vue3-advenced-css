<script setup>
import DownloadProgress from '../../components/progress/DownloadProgress.vue'
import showMessage from '../../js/packagePopup/showMessage.js'

const handleClick = () => {
  showMessage('message from index.vue', (close) => {
    console.log('hi')
    close()
  })
}
</script>

<template>
  <DownloadProgress />
  <button @click="handleClick">show msg</button>
</template>

<style scoped lang="scss"></style>
