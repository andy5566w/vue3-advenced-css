<template>
  <input type="file" accept="audio/wav" @input="handleInput" />
</template>

<script setup>
const audioContext = new window.AudioContext()
const handleInput = (e) => {
  if (e.target.files[0]) {
    const reader = new FileReader()
    reader.onload = (e) => {
      const arrayBuffer = e.target.result
      console.log({ arrayBuffer })
      audioContext.decodeAudioData(arrayBuffer, (decodeData) => {
        console.log(decodeData)
        const bufferSource = audioContext.createBufferSource()
        bufferSource.buffer = decodeData
        bufferSource.connect(audioContext.destination)
        bufferSource.start()
        bufferSource.stop(audioContext.currentTime + 3)
      })
    }
    reader.readAsArrayBuffer(e.target.files[0])
  }
}
</script>

<style></style>
