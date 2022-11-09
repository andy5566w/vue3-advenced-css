import { Vector } from './Vector.js'

class Snake {
  body = []
  maxLength = 5
  head = new Vector(0, 0)
  speed = new Vector(1, 0)
  constructor() {}

  update() {
    const newHead = this.head.add(this.speed)
    this.body.push(this.head)
    // maybe while
    if (this.body.length > this.maxLength) {
      this.body.shift()
    }
    this.head = newHead
  }

  setDirection(direction = 'right') {
    let speed
    switch (direction.toLowerCase()) {
      case 'right':
        speed = new Vector(1, 0)
        break
      case 'left':
        speed = new Vector(-1, 0)
        break
      case 'up':
        speed = new Vector(0, -1)
        break
      case 'down':
        speed = new Vector(0, 1)
    }
    if (!speed) {
      console.log(`direction (${direction}) is invalid`)
      return
    }
    if (speed.multiple(-1).equal(this.speed)) {
      console.warn(`can't set direction as opposite`)
      return
    }
    this.speed = speed
  }
}

export default Snake
