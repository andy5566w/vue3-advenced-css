<template>
  <template v-if="!isExternal">
    <router-link :to="to" :ref="(instance) => (linkRef = instance?.$el)">
      <slot name="default"></slot>
    </router-link>
  </template>
  <template v-else>
    <a :href="href" :target="target">
      <slot name="default"></slot>
    </a>
  </template>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useIntersectionObserver } from '@vueuse/core'

const router = useRouter()
const linkRef = ref('null')
const props = defineProps({
  to: [String, Object],
  target: String,
  external: Boolean,
})

const prefetchRoute = async (to) => {
  console.log(router.resolve(to))
  const { matched } = router.resolve(to)
  const promises = []

  const componentFns = matched
    .map((component) => component.components?.default)
    .filter((c) => typeof c === 'function')
  for (const componentFn of componentFns) {
    promises.push(Promise.reject(componentFn()))
  }

  await Promise.all(promises)
}

const isExternal = computed(() => {
  if (props.external) {
    return true
  }

  if (props.target && props.target !== '_self') {
    return true
  }

  if (typeof props.to === 'object') {
    return false
  }

  return props.to === '' || props.to.startsWith('https://')
})

const href = computed(() => {
  return typeof props.to === 'object'
    ? router.resolve(props.to)?.href ?? null
    : props.to.toString()
})

onMounted(() => {
  const observer = useIntersectionObserver(linkRef, ([{ isIntersecting }]) => {
    if (!isIntersecting) {
      return
    }
    prefetchRoute(props.to)
    observer.stop()
  })
})
</script>

<style scoped lang="scss"></style>
