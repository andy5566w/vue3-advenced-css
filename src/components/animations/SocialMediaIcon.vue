<template>
  <div class="container my-8">
    <ul class="flex items-center gap-8 justify-center">
      <li>
        <a href="#"><AcademicCapIcon class="w-10 icon" /></a>
      </li>
      <li>
        <a href="#"><CakeIcon class="w-10 icon" /></a>
      </li>
      <li>
        <a href="#"><BugAntIcon class="w-10 icon" /></a>
      </li>
      <li>
        <a href="#"><CreditCardIcon class="w-10 icon" /></a>
      </li>
      <li>
        <a href="#"><EnvelopeIcon class="w-10 icon" /></a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {
  AcademicCapIcon,
  CakeIcon,
  BugAntIcon,
  CreditCardIcon,
  EnvelopeIcon,
} from '@heroicons/vue/24/outline'
</script>

<style lang="scss" scoped>
a {
  display: inline-block;
  position: relative;
  transition: 0.5s;
  box-shadow: 10px 5px 10px black;
  border-radius: 15px;
  background-color: #fff;
  padding: 1rem;
  overflow: hidden;

  .icon {
    position: relative;
    z-index: 2;
  }
  &:before {
    position: absolute;
    top: 130%;
    left: -100%;
    transform: rotate(45deg);
    background-color: #535bf2;
    width: 150%;
    height: 150%;
    content: '';
  }

  &:hover {
    .icon {
      color: #fff;
    }
    &:before {
      animation: moving 0.5s 1 forwards;
    }
  }
}

@keyframes moving {
  0% {
    top: 130%;
    left: -100%;
  }

  50% {
    top: -40%;
    left: 5%;
  }

  100% {
    top: -20%;
    left: -20%;
  }
}
</style>
