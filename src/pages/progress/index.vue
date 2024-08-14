<script setup>
import DownloadProgress from '../../components/progress/DownloadProgress.vue'
import Message from '../../components/popup/Message.vue'
import { useShowMessage } from '../../js/packagePopup/showMessage.js'

const handleClick = () => {
  useShowMessage(
    Message,
    { message: 'this is test 98', title: 'this is title' },
    {}
  )
}
</script>

<template>
  <!--  <DownloadProgress />-->
  <button @click="handleClick">show msg</button>
</template>

<style scoped lang="scss"></style>
