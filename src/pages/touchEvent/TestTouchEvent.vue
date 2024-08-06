<template>
  <div class="patent" ref="parentRef">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorum
    illum laborum veniam vero! Consectetur labore molestiae odio soluta
    suscipit!
    <div class="child" ref="childrenRef">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quidem.
    </div>
  </div>
  <button ref="buttonRef">click me</button>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const parentRef = ref(null)
const childrenRef = ref(null)
const buttonRef = ref(null)

const bindTouchEvent = () => {
  const events = [
    'touchstart',
    'touchmove',
    'touchend',
    'touchcancel',
    'click',
    'pointerover',
    'pointerenter',
    'pointerdown',
    'pointermove',
    'pointerup',
    'pointercancel',
    'pointerout',
  ]
  events.forEach((eventName) => {
    const parent = parentRef.value
    const children = childrenRef.value
    const button = buttonRef.value

    parent.addEventListener(
      eventName,
      (event) => {
        console.table({ element: 'parent', capture: true, eventName })
      },
      true
    )
    parent.addEventListener(eventName, (event) => {
      console.table({ element: 'parent', capture: false, eventName })
    })

    children.addEventListener(
      eventName,
      (event) => {
        console.table({ element: 'children', capture: true, eventName })
      },
      true
    )
    children.addEventListener(eventName, (event) => {
      console.table({ element: 'children', capture: false, eventName })
    })

    button.addEventListener(
      eventName,
      (event) => {
        console.table({ element: 'button', capture: true, eventName })
      },
      true
    )
    button.addEventListener(eventName, (event) => {
      console.table({ element: 'button', capture: false, eventName })
    })
  })
}

onMounted(() => {
  bindTouchEvent()
})
</script>

<style scoped lang="scss">
.patent {
  position: relative;
  background-color: lightblue;
  width: 500px;
  height: 500px;
}

.child {
  //position: absolute;
  float: left;
  inset: 0;
  background-color: olive;
  width: 200px;
  height: 200px;
}
</style>
