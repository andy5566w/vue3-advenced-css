<template>
  <div class="flex flex-wrap items-center gap-8">
    <RotateHoverButton />
    <SwipeButton />
    <SwipeButtonWithText />
    <SpreadHoverButton />
    <StrengthButton />
    <GlowingButton />
    <TwoLayersSwapButton />
    <TextScaleButton />
    <CircularSwapButton />
    <Rotate3LayersButton />
    <LayerSwapButton />
    <ThreeCircleBackgroundButton />
    <TwoLayersButton />
    <SpittedButton />
    <BorderSwapButton />
    <BorderGrowingButton />
    <FirstLetterRotateButton />
    <FourBorderButton />
    <WavyButton />
    <TwoCutsButton />
    <TwoSkewButton />
    <PulsingButton />
    <DiagonalSwipeButton />
    <testSetUp ref="setup" />
    <testScruptSetUp ref="setupScript" />
  </div>
</template>

<script setup>
import RotateHoverButton from './buttons/RotateHoverButtons.vue'
import SwipeButton from './buttons/SwipeButton.vue'
import SpreadHoverButton from './buttons/SpreadHoverButton.vue'
import StrengthButton from './buttons/StrengthButton.vue'
import SwipeButtonWithText from './buttons/SwipeButtonWithText.vue'
import GlowingButton from './buttons/GlowingButton.vue'
import TwoLayersSwapButton from './buttons/TwoLayersSwapButton.vue'
import TextScaleButton from './buttons/TextScalingButton.vue'
import CircularSwapButton from './buttons/CircularSwapButton.vue'
import Rotate3LayersButton from './buttons/Rotate3LayersButton.vue'
import LayerSwapButton from './buttons/LayersSwapButton.vue'
import ThreeCircleBackgroundButton from './buttons/ThreeCircleBackgroundButton.vue'
import TwoLayersButton from './buttons/TwoLayersButton.vue'
import SpittedButton from './buttons/SplittedButton.vue'
import BorderSwapButton from './buttons/BorderSwapButton.vue'
import BorderGrowingButton from './buttons/BorderGrowingButton.vue'
import FirstLetterRotateButton from './buttons/FirstLetterRotateButton.vue'
import FourBorderButton from './buttons/FourBorderButton.vue'
import WavyButton from './buttons/WavyButton.vue'
import TwoCutsButton from './buttons/TwoCutsButton.vue'
import TwoSkewButton from './buttons/TwoSkewButton.vue'
import PulsingButton from './buttons/PulsingButton.vue'
import DiagonalSwipeButton from './buttons/DiagonalSwipeButton.vue'
import testSetUp from './testViteInspect/setup.vue'
import testScruptSetUp from './testViteInspect/setupScript.vue'
import { ref, onMounted } from 'vue'

const setup = ref(null)
const setupScript = ref(null)
onMounted(() => {
  console.log({
    setup: setup.value,
    setupScript: setupScript.value,
  })
})
</script>

<style lang="scss" scoped></style>
