<template>
  <div class="editorControls">
    <div class="editorControls__right">
      <span
        class="editorControls__right--btn cursor-pointer hover:main-color transition"
      >
        <ion-icon
          @click="handleDecrease"
          name="remove-circle-outline"
          size="large"
        ></ion-icon>
      </span>
      <input
        type="range"
        step="1"
        :min="props.min"
        :max="props.max"
        :value="zoomValue"
        @change="handleChange"
      />
      <span
        class="editorControls__right--btn cursor-pointer hover:main-color transition"
      >
        <ion-icon
          name="add-circle-outline"
          size="large"
          @click="handleIncrease"
        ></ion-icon>
      </span>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, watch } from 'vue'
import { useEditor } from '../../../store/editor.js'

const editor = useEditor()
const zoomValue = ref(0)
const props = defineProps({
  max: {
    type: Number,
    default: () => 5,
  },
  min: {
    type: Number,
    default: () => 0,
  },
})

watch(zoomValue, (zoomValue) => {
  editor.changeCurrentUnitIndex(zoomValue)
})

const handleIncrease = () => {
  if (zoomValue.value >= props.max) {
    return
  }
  zoomValue.value++
}

const handleDecrease = () => {
  if (zoomValue.value <= 0) {
    return
  }
  zoomValue.value--
}

const handleChange = (e) => {
  zoomValue.value = +e.target.value
  console.log(+e.target.value)
}
</script>

<style scoped lang="scss">
.editorControls {
  display: flex;
  flex-direction: row-reverse;

  &__right {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 1rem;

    &--btn {
      height: 32px;
    }
  }
}
</style>
