<template>
  <div class="box">
    <div class="spinner">
      <span class="output">{{ x }} </span>
      <div class="progress" ref="progressRef">
        <span class="meter" ref="meterRef"></span>
      </div>

      <div class="btn plus" @click="handlePlus">+</div>
      <div class="btn minus" @click="handleMinus">-</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const x = ref(0)
const percentages = ref(0)
const progressRef = ref(null)
const meterRef = ref(null)
const MAX = 100

const handlePlus = () => {
  if (x.value >= MAX) {
    return
  }
  x.value++
  meterRef.value.style.height = percentages.value * x.value + 'px'
}

const handleMinus = () => {
  if (x.value <= 0) {
    return
  }
  x.value--
  meterRef.value.style.height = percentages.value * x.value + 'px'
}

onMounted(() => {
  percentages.value = progressRef.value.clientHeight / MAX
})
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 50px rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  background-color: #333;
  width: 80px;
  height: 300px;
}

.spinner {
  display: flex;
  position: relative;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 40px;
  user-select: none;
}

.progress {
  display: flex;
  position: relative;
  flex-direction: column-reverse;
  border-radius: 20px;
  background-color: #222;
  width: 10px;
  height: 100px;
  //   overflow: hidden;

  .meter {
    --color: #0f0;
    position: absolute;
    filter: drop-shadow(0 0 2.5px var(--color))
      drop-shadow(0 0 10px var(--color));
    transition: 0.5s;
    border-radius: 20px;
    background-color: var(--color);
    width: 100%;
    // min-height: 80px;
  }
}

.btn {
  position: relative;
  cursor: pointer;
  border-radius: 50%;
  background-color: #444;
  width: 40px;
  height: 40px;
  color: white;
  font-size: 1.5em;
  line-height: 40px;
  text-align: center;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff;

  &:active {
    box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.9);
    font-size: 1.25em;
  }
}

.output {
  position: relative;
  color: #fff;
  font-size: 2em;
  text-shadow: 0 0 5px white;
}
</style>
