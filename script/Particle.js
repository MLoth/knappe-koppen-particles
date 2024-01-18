export default class Particle {
  friction = 0.99

  constructor(x, y, radius, color, velocity) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = velocity
    this.alpha = 1
  }

  draw(ctx) {
    ctx.globalAlpha = this.alpha
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.restore()
  }

  update(ctx) {
    this.draw(ctx)
    this.velocity.x *= this.friction
    this.velocity.y *= this.friction

    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.velocity.x = -this.velocity.x
    }

    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.velocity.y = -this.velocity.y
    }

    this.x += this.velocity.x
    this.y += this.velocity.y
    this.alpha -= 0.01
  }
}
