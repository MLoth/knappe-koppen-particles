import './style.css'

import Particle from './script/Particle.js'

const mouse = {
  x: undefined,
  y: undefined,
}

window.addEventListener('mousemove', (e) => {
  mouse.x = e.pageX
  mouse.y = e.pageY
})

const generateParticles = (amount = 100) => {
  const particles = []
  for (let i = 0; i < amount; i++) {
    particles.push(
      new Particle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        Math.random() * 5,
        'blue',
        {
          x: 5 - (Math.random() - 0.1) * 10,
          y: 5 - (Math.random() - 0.1) * 10,
        },
      ),
    )
  }
  return particles
}

const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')

const particles = []

const animate = () => {
  console.log(mouse)
  requestAnimationFrame(animate)
  if (!mouse.x || !mouse.y) return

  const p = new Particle(mouse.x, mouse.y, Math.random() * 5, 'blue', {
    x: 5 - (Math.random() - 0.1) * 10,
    y: 5 - (Math.random() - 0.1) * 10,
  })

  particles.push(p)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  particles.forEach((particle) => {
    if (particle.alpha <= 0) {
      particles.splice(particles.indexOf(particle), 1)
    }
    particle.update(ctx)
  })
}

animate()
