<template>
  <div class="chatGTP">
    <textarea rows="1" ref="textarea" @input="handleInput"></textarea>
    <ul ref="ul">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const textarea = ref(null)
const ul = ref(null)
const handleInput = (event) => {
  textarea.value.style.height = 'auto'
  textarea.value.style.height = event.target.scrollHeight + 'px'
}
onMounted(() => {
  ul.value.childNodes.forEach((el) => {
    if (Node.TEXT_NODE === el.nodeType)
      console.log('el', el.nodeType, Node.TEXT_NODE, Node.ELEMENT_NODE)
  })
  console.log(ul.value.childNodes)
})
</script>

<style scoped lang="scss">
.chatGTP {
  width: 500px;
  height: 700px;

  textarea {
    outline: none;
    border-radius: 4px;
    padding: 0.5rem;
    width: 100%;
    resize: none;
    font-size: 16px;
    line-height: 2;
  }
}
</style>
