<template>
  <button @click="handleClick" class="open">open folder</button>
  <div>
    {{ content }}
  </div>

  <div class="circle"></div>
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

<style lang="scss">
@use 'sass:math';
$breakpoints: (
  iphone: (
    320,
    480,
  ),
  pad: (
    480,
    720,
  ),
  notebook: (
    720,
    960,
  ),
  pc: (
    920,
    1020,
  ),
);
@mixin responseTo($breakpoint) {
  $dp: map-get($breakpoints, $breakpoint);

  @if type-of($dp) == 'list' {
    @media (min-width: nth($dp,1)) and (max-width: nth($dp,2)) {
      @content;
    }
  } @else {
    @media (min-width: $dp) {
      @content;
    }
  }
}

@mixin flex-center($layout: flex-end) {
  display: flex;
  justify-content: $layout;
  align-items: $layout;

  @content;
}

.open {
  $base-color: limegreen;
  @include flex-center {
    height: 100%;
  }

  @include responseTo('pad') {
    height: 500%;
  }

  @include responseTo('pc') {
    height: 200%;
  }

  //@for $i from 1 through 4 {
  //  ul:nth-child(3n + #{$i}) {
  //    background-color: lighten($base-color, $i * 5%);
  //  }
  //}
  color: red;
}

.circle {
  $r: 100px;
  $deg: 80deg;
  $x: $r * math.cos($deg);
  $y: -$r * math.sin($deg);
  transform: translate($x, $y);
  border-radius: 50%;
  background-color: #fff;
  width: 150px;
  height: 150px;
}
</style>
