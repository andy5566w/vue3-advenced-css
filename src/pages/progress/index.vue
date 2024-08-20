<script setup>
import DownloadProgress from '../../components/progress/DownloadProgress.vue'
import Message from '../../components/popup/Message.vue'
import { useShowMessage } from '../../js/packagePopup/showMessage.js'
import { ref } from 'vue'
import { useScroll } from '@vueuse/core'

const handleClick = () => {
  const closeFn = useShowMessage(
    Message,
    { message: 'this is test 98', title: 'this is title' },
    {
      close: () => {
        closeFn()
        window.removeEventListener('wheel', handleWheel)
      },
    }
  )

  window.addEventListener('wheel', handleWheel, { passive: false })
}

const handleWheel = (event) => {
  event.preventDefault()
  console.log('wheel')
}

const scrollEl = ref(null)
const scrollData = useScroll(scrollEl)
</script>

<template>
  <!--  <DownloadProgress />-->
  <button @click="handleClick">show msg</button>
  <pre>{{ scrollData }}</pre>
  <div class="wrap" ref="scrollEl">
    <div class="box">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
      deserunt distinctio dolorem ducimus ea, eaque fugit magnam maxime numquam
      perspiciatis porro recusandae repudiandae, tempora ullam, veniam? Ad
      asperiores at cupiditate deleniti dolores doloribus dolorum enim est
      expedita illum in incidunt ipsam iste iure labore molestiae mollitia,
      necessitatibus nemo nobis nostrum odio officiis perferendis porro
      praesentium quas quibusdam, quod recusandae repellat repellendus sapiente
      similique temporibus voluptate voluptatum. Accusantium architecto
      asperiores beatae cum cumque debitis dolores eos eveniet excepturi
      explicabo iure iusto labore maxime minus mollitia, neque obcaecati,
      pariatur placeat quae repellendus sed similique tenetur, ullam unde
      veritatis vero vitae. Animi at debitis distinctio enim in ipsam nisi
      sequi! Adipisci aliquam aperiam beatae culpa deserunt eos eum incidunt
      laboriosam, maiores modi nesciunt nisi, nulla obcaecati quas sequi soluta
      sunt vitae? Aspernatur consequatur consequuntur ducimus harum non quo,
      soluta! Ab eaque exercitationem ipsam sapiente voluptatibus. Assumenda
      debitis eius eos illo impedit, inventore itaque magnam non odio officia
      optio perspiciatis quaerat repellendus repudiandae tempora totam unde
      voluptatibus. Consectetur corporis doloremque, dolores enim ex illo ipsa
      labore, magni non placeat quisquam quod similique vel. At dolore
      doloremque doloribus ea molestiae nisi non? Eligendi, facilis nihil! Amet
      atque eaque laudantium quam. Esse molestiae quo temporibus voluptatibus.
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  height: 300vh;
}

.wrap {
  height: 500px;
  overflow: auto;
}
</style>
