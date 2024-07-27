import { ref } from 'vue'
export const useQuadrant = (sourRef) => {
  const direct = ref('')
  let theta = 0
  console.log(sourRef)
  const getTheta = () => {
    if (!sourRef) {
      console.error('sourRef is invalid')
      return
    }
    let height = sourRef.clientHeight
    let weight = sourRef.clientWidth
    theta = Math.atan2(height, weight)
  }

  sourRef.addEventListener('mouseenter', (e) => {
    // Math.PI -> 0 ~ 3.14
    // -Math.PI -> 0 ~ -3.14
    const { offsetX, offsetY } = e
    const width = sourRef.clientWidth
    const height = sourRef.clientHeight
    const angle = Math.atan2(height / 2 - offsetY, offsetX - width / 2)
    console.log({ theta, angle })
    if (theta > angle && -theta <= angle) {
      console.log('right')
      direct.value = 'right'
    } else if (angle > theta && Math.PI - theta >= angle) {
      console.log('top')
      direct.value = 'top'
    } else if (angle > Math.PI - theta || -Math.PI + theta >= angle) {
      console.log('left')
      direct.value = 'left'
    } else {
      console.log('bottom')
      direct.value = 'bottom'
    }
  })
  getTheta()
  return { direct }
}
