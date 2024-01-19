const DISTANCE = 100
const DURATION = 500
const map = new WeakMap()
const ob = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      const animation = map.get(entry.target)
      if (animation) {
        animation.play()
      }
      ob.unobserve(entry.target)
    }
  }
})

function isBelowViewport(el) {
  const { top } = el.getBoundingClientRect()
  return top - DISTANCE > window.innerHeight
}
export default {
  mounted(el) {
    if (!isBelowViewport(el)) {
      return
    }
    isBelowViewport(el)
    const animation = el.animate(
      [
        { transform: `translateY(${DISTANCE}px)`, opacity: 0.5 },
        { transform: `translateY(0)`, opacity: 1 },
      ],
      {
        duration: DURATION,
        fill: 'forwards',
        easing: 'ease',
      }
    )
    animation.pause()
    map.set(el, animation)
    ob.observe(el)
  },
  unmounted(el) {
    ob.unobserve(el)
  },
}
