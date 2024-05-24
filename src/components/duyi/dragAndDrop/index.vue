<template>
  <div
    class="list"
    @dragstart="handleDragStart"
    @dragenter="handleDragEnter"
    @dragend="handleDragEnd"
    @dragover.prevent
    ref="listRef"
  >
    <div class="box" draggable="true">1</div>
    <div class="box" draggable="true">2</div>
    <div class="box" draggable="true">3</div>
    <div class="box" draggable="true">4</div>
    <div class="box" draggable="true">5</div>
    <div class="box" draggable="true">6</div>
    <div class="box" draggable="true">7</div>
    <div class="box" draggable="true">8</div>
    <div class="box" draggable="true">9</div>
    <div class="box" draggable="true">10</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sourceNode = ref(null)
const listRef = ref(null)
const handleDragStart = (e) => {
  sourceNode.value = e.target
  e.dataTransfer.effectAllowed = 'move' // change mouse icon
  setTimeout(() => {
    e.target.classList.add('moving')
  })
}

const handleDragEnter = (e) => {
  if (e.target === sourceNode.value || e.target === listRef.value) {
    return
  }
  changePosition(e.target)
}

const handleDragEnd = (e) => {
  sourceNode.value.classList.remove('moving')
  sourceNode.value = null
}

function changePosition(target) {
  const children = Array.from(listRef.value.children)
  const sourceIndex = children.indexOf(sourceNode.value)
  const targetIndex = children.indexOf(target)
  // 'afterbegin' | 'afterend' | 'beforebegin' | 'beforeend'
  target.insertAdjacentElement(
    sourceIndex > targetIndex ? 'beforebegin' : 'afterend',
    sourceNode.value
  )
}
</script>

<style scoped lang="scss">
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 700px;

  .box {
    border-radius: 5px;
    background-color: blue;
    width: 80%;
    height: 30px;

    &.moving {
      border: 1px dotted black;
      background: transparent;
    }
  }
}
</style>
