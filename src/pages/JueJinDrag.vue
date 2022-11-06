<template>
  <div class="slide" ref="refSlide">
    <div
      id="list"
      ref="refList"
      class="list--grid"
      @mousedown="handleMouseDown"
      @mouseup="handleWindowMouseUp"
    >
      <img
        v-for="{ className, alt, src } in images"
        :alt="alt"
        :class="className"
        :src="src"
        :key="src"
      />
    </div>
    <div id="content" ref="refContent" @mouseup="handleContentMouseUp">
      <span id="tip" class="font-bold uppercase">drag image to here</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const images = [
  {
    className: 'item',
    alt: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfHx8fDE2NjIwMjM2MDQ&ixlib=rb-1.2.1&q=80&w=100',
    src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfHx8fDE2NjIwMjM2MDQ&ixlib=rb-1.2.1&q=80&w=100',
  },
  {
    className: 'item',
    alt: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&ixlib=rb-1.2.1&q=80&w=100',
    src: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&ixlib=rb-1.2.1&q=80&w=100',
  },
  {
    className: 'item',
    alt: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8Y2F0fGVufDB8fHx8MTY2MjAyNzg3Nw&ixlib=rb-1.2.1&q=80&w=100',
    src: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8Y2F0fGVufDB8fHx8MTY2MjAyNzg3Nw&ixlib=rb-1.2.1&q=80&w=100',
  },
  {
    className: 'item',
    alt: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8Y2F0fGVufDB8fHx8MTY2MjAyNzg3Nw&ixlib=rb-1.2.1&q=80&w=100',
    src: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8Y2F0fGVufDB8fHx8MTY2MjAyNzg3Nw&ixlib=rb-1.2.1&q=80&w=100',
  },
  {
    className: 'item',
    alt: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&ixlib=rb-1.2.1&q=80&w=100',
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&ixlib=rb-1.2.1&q=80&w=100',
  },
  {
    className: 'item',
    alt: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8Nnx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&ixlib=rb-1.2.1&q=80&w=100',
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8Nnx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&ixlib=rb-1.2.1&q=80&w=100',
  },
  {
    className: 'item',
    alt: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8N3x8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&ixlib=rb-1.2.1&q=80&w=100',
    src: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8N3x8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&ixlib=rb-1.2.1&q=80&w=100',
  },
  {
    className: 'item',
    alt: 'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&ixlib=rb-1.2.1&q=80&w=100',
    src: 'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&ixlib=rb-1.2.1&q=80&w=100',
  },
  {
    className: 'item',
    alt: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&ixlib=rb-1.2.1&q=80&w=100',
    src: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&ixlib=rb-1.2.1&q=80&w=100',
  },
]
let isDragging = ref(false)
let cloneEl = ref(null)
let initial = ref({})
let refSlide = ref(null)
let refList = ref(null)
let refContent = ref(null)

//---------- Methods --------------------
const handleMouseDown = (e) => {
  e.preventDefault()
  if (e.target.classList.contains('item')) {
    refSlide.value.classList.add('active')

    cloneEl.value = e.target.cloneNode(true)
    cloneEl.value.classList.add('flutter')
    const { clientX, clientY, offsetX, offsetY } = e
    initial.value = { offsetX, offsetY, clientX, clientY }
    refList.value.appendChild(cloneEl.value)
    isDragging.value = true
  }
}

const changeCloneStyle = (arr) => {
  const original = cloneEl.value.style.cssText.split(';')
  cloneEl.value.style.cssText = original.concat(arr).join(';') + ';'
}

const handleWindowMouseUp = () => {
  refSlide.value.classList.remove('active')
  isDragging.value = false
  reverseCloneToOriginalPosition()
}

const handleContentMouseUp = (e) => {
  if (!cloneEl.value) return
  const { offsetX, offsetY } = e
  const clone = cloneEl.value.cloneNode(true)
  clone.classList.remove('flutter')
  clone.style.cssText = `left: ${offsetX - initial.value.offsetX}px; top:${
    offsetY - initial.value.offsetY
  }px;`
  refContent.value.appendChild(clone)
  cloneEl.value.remove()
  cloneEl.value = null
}

const handleWindowMouseMove = (e) => {
  const { clientX, clientY } = e
  if (isDragging.value) {
    changeCloneStyle([
      `left: ${clientX - initial.value.offsetX}px`,
      `top: ${clientY - initial.value.offsetY}px`,
    ])
  }
}

const reverseCloneToOriginalPosition = () => {
  isDragging.value = false
  if (!cloneEl.value) return
  cloneEl.value.classList.add('is_return')
  const { offsetX, offsetY, clientX, clientY } = initial.value
  changeCloneStyle([
    `left: ${clientX - offsetX}px`,
    `top: ${clientY - offsetY}px`,
  ])

  const animationDuration = 300
  setTimeout(() => {
    if (!cloneEl.value) return
    cloneEl.value.remove()
    cloneEl.value = null
  }, animationDuration)
}

const handleMouseOutOfWindow = (e) => {
  const from = e.relatedTarget || e.toElement
  if (!from || from.nodeName === 'HTML') {
    reverseCloneToOriginalPosition()
  }
}

onMounted(() => {
  window.addEventListener('mouseup', handleWindowMouseUp)
  window.addEventListener('mousemove', handleWindowMouseMove)
  document.addEventListener('mouseout', handleMouseOutOfWindow)
})

onUnmounted(() => {
  window.removeEventListener('mouseup', handleWindowMouseUp)
  window.removeEventListener('mousemove', handleWindowMouseMove)
  document.removeEventListener('mouseout', handleMouseOutOfWindow)
})
</script>

<style scoped lang="scss">
.active {
  cursor: grabbing;
}
.hide {
  opacity: 0;
}

.is_return {
  transition: all 0.3s;
}

.flutter {
  position: absolute;
  z-index: 9999;
  pointer-events: none;
}

.slide {
  display: flex;
  border-right: 1px solid rgba(0, 0, 0, 0.15);
  width: 1200px;
  height: 700px;
  overflow: scroll;
  #list {
    width: 250px;
    user-select: none;
    .item {
      display: inline-block;
      break-inside: avoid;
      margin-bottom: 4px;
      background: rgba(0, 0, 0, 0.15);
      width: 120px;
    }
    .item:hover {
      filter: brightness(90%);
      cursor: grab;
    }
    .item:active {
      cursor: grabbing;
    }
  }
  .list--grid {
    column-gap: 0;
    column-count: 2;
  }
}
#content {
  position: relative;
  flex-grow: 1;
  margin-left: 45px;
  background: rgba(0, 0, 0, 0.07);
  height: 100%;
  .item {
    position: absolute;
    transform-origin: top left;
  }
  img {
    width: 120px;
  }
}
#tip {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #999999;
  font-size: 28px;
}

.slide::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
