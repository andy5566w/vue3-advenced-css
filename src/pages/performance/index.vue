<template>
  <div>
    <BaseButton @click="handleAddDom(200000)">start add dom</BaseButton>
    <BaseButton class="mx-4" @click="handleAddDomWithPerformance(200000)"
      >performance start add dom</BaseButton
    >
    <BaseButton @click="reset">Reset</BaseButton>
    <ul ref="ulRef"></ul>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import BaseButton from '../../components/buttons/BaseButton.vue'
const ulRef = ref(null)

const handleAddDom = (number = 10000) => {
  console.time('handleAddDom')
  for (let n = 0; number > n; n++) {
    const liEle = document.createElement('li')
    liEle.textContent = `${n}`
    ulRef.value.appendChild(liEle)
  }
  console.timeEnd('handleAddDom')
}

const handleAddDomWithPerformance = (number = 1000) => {
  const tasks = []
  console.time('handleAddDom')
  for (let n = 0; number > n; n++) {
    tasks.push(() => {
      const liEle = document.createElement('li')
      liEle.textContent = `${n}`
      ulRef.value.appendChild(liEle)
    })
  }

  const scheduleWithSetTimeout = (executeTask) => {
    setTimeout(() => {
      const now = performance.now()
      executeTask(() => performance.now() - now < 1)
    }, 1000)
  }

  const scheduleWithIdle = (executeTask) => {
    requestIdleCallback((idle) => {
      executeTask(() => idle.timeRemaining() > 0)
    })
  }
  performanceTasks(tasks, scheduleWithSetTimeout)
  console.timeEnd('handleAddDom')
}

const performanceTasks = (tasks = [], scheduler) => {
  if (tasks.length === 0) {
    return
  }

  let index = 0
  function _run() {
    const executeTask = (idle) => {
      while (tasks.length > index && idle()) {
        tasks[index++]()
      }
      _run()
    }
    scheduler(executeTask)
  }
  _run()
}

const reset = () => {
  ulRef.value.innerHTML = ''
}
</script>

<style scoped lang="scss"></style>
