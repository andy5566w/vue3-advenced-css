import { Vector } from './Vector.js'

class Particle {
  constructor(arg) {
    const def = {
      p: new Vector(),
      v: new Vector(0, 1),
      a: new Vector(1, 0),
      r: 10,
      color: '#fff',
      ctx: null,
      border: {},
      gravity: 0.6,
      ...arg,
    }
    Object.assign(this, def)
  }

  draw() {
    this.ctx.save()
    this.ctx.translate(this.p.x, this.p.y)
    this.ctx.beginPath()
    this.ctx.arc(0, 0, this.r, 0, Math.PI * 2)
    this.ctx.fillStyle = '#fff'
    this.ctx.fill()
    this.ctx.restore()
  }

  update() {
    this.p = this.p.add(this.v)
    this.v = this.v.add(this.a)
    this.v.move(0, this.gravity)
    if (this.p.y + this.r > this.border.h) {
      this.v.y = -Math.abs(this.v.y)
    }

    if (this.p.x + this.r > this.border.w) {
      this.v.x = -Math.abs(this.v.x)
    }

    if (this.p.x < 0) {
      this.v.x = Math.abs(this.v.x)
    }

    if (this.p.y < 0) {
      this.v.y = Math.abs(this.v.y)
    }
  }
}

export default Particle
