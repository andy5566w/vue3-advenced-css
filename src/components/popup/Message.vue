<template>
  <div class="dialog">
    <div class="overlay" @click="$emit('close')"></div>

    <div class="dialog-container caret-gray-700">
      <h1>{{ title }}</h1>
      <p class="message">{{ message }}</p>
      <button class="button" @click="$emit('close')">close</button>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  message: {
    type: String,
    default: () => 'this is default message',
  },
})

defineEmits(['close'])
</script>

<style scoped lang="scss">
.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 100vw;
  height: 100vh;

  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }

  .dialog-container {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    translate: -50% -50%;
    border: 1px solid #2d3436;
    border-radius: 5px;
    background-color: #242a2a;
    padding: 0.5rem;
    aspect-ratio: 2 / 1;
    width: 300px;

    .message {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.3rem;
    }

    .button {
      all: initial;
      position: absolute;
      right: 8px;
      bottom: 8px;
      cursor: pointer;
      margin-left: auto;
      padding: 0.5rem;
      color: #fff;
    }
  }
}
</style>
