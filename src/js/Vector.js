export class Vector {
  constructor(x, y) {
    this.x = x || 0
    this.y = y || 0
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

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  set length(nv) {
    const temp = this.unit.mul(nv)
    this.set(temp.x, temp.y)
  }

  get angle() {
    return Math.atan2(this.y, this.x)
  }
  get unit() {
    return this.mul(1 / this.length)
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

  clone() {
    return new Vector(this.x, this.y)
  }
}
