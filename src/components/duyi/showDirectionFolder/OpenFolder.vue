<template>
  <button @click="handleClick">open folder</button>
  <div>
    {{ content }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
const content = ref('')
const handleClick = async () => {
  try {
    const handle = await showDirectoryPicker()
    const handles = await processHandle(handle)
    console.log(handles)

    // below is for test
    const handleFile = handles.children[11]

    const file = await handleFile.getFile()

    const fileReader = new FileReader()
    fileReader.onload = function (e) {
      content.value = e.target.result
    }
    fileReader.readAsText(file, 'utf-8')
  } catch (error) {
    console.error('user reject: ', error)
  }
}

const processHandle = async (handle) => {
  if (handle.kind === 'file') {
    return handle
  }
  const iter = handle.entries()
  handle.children = []
  for await (const item of iter) {
    handle.children.push(await processHandle(item[1]))
  }
  return handle
}
</script>

<style lang="scss" scoped></style>
