import { ref, toValue, computed } from 'vue'
import * as counter from './counter.js'

export default function (initialCount) {
  const count = ref(initialCount || 0)

  function increment() {
    // Use .value to pass in the underlying value
    count.value = counter.increment(count.value)
  }

  function decrement() {
    // toValue does the same thing, is more reliable when you might have
    // a ref, non-ref, or getter
    count.value = counter.decrement(toValue(count))
  }

  const double = computed(() => counter.double(count.value))

  // All side effects go in the composable layer
  setInterval(decrement, 2000)

  return {
    count,
    increment,
    decrement,
    double,
  }
}
