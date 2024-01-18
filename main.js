import './style.css'

import Particle from './script/Particle.js'

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

const particles = generateParticles(1000)

const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')

const animate = () => {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // TODO: We gaan elke particle updaten (tekenen gebeurt vanzelf)
}

animate()
