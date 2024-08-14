<script setup>
import DownloadProgress from '../../components/progress/DownloadProgress.vue'
import useShowMessage from '../../js/packagePopup/showMessage.js'

const { toggleDialog } = useShowMessage()
const handleClick = () => {
  toggleDialog(true)
}
</script>

<template>
  <!--  <DownloadProgress />-->
  <button @click="handleClick">show msg</button>
</template>

<style scoped lang="scss"></style>
