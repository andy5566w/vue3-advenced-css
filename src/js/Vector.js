export class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  add(v = { x: 0, y: 0 }) {
    return new Vector(this.x + v.x, this.y + v.y)
  }

  sub(v = { x: 0, y: 0 }) {
    return new Vector(this.x - v.x, this.y - v.y)
  }

  multiple(s) {
    return new Vector(this.x * s, this.y * s)
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  set(x, y) {
    this.x = x
    this.y = y
    return this
  }

  move(x, y) {
    this.x = x
    this.y = y
    return this
  }

  equal(v) {
    return this.x === v.x && this.y === v.y
  }

  toString() {
    return `(${this.x}, ${this.y})`
  }

  angle() {
    return Math.atan2(this.y, this.x)
  }

  clone() {
    return new Vector(this.x, this.y)
  }
}
