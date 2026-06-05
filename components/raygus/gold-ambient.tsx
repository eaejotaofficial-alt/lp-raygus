'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type Particle = {
  left: string
  top: string
  size: number
  delay: string
  duration: string
}

/**
 * Fundo dourado ambiente para a coluna direita do hero.
 * Pensado como placeholder elegante — o cliente pode substituir por um
 * background interativo no futuro mantendo a mesma área.
 */
export function GoldAmbient() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Gera as partículas no cliente para evitar mismatch de hidratação
    const items = Array.from({ length: 28 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: `${Math.random() * 6}s`,
      duration: `${Math.random() * 5 + 5}s`,
    }))
    setParticles(items)
  }, [])

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Brilho radial central */}
      <div className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5A12C]/20 blur-[120px]" />
      <div className="absolute left-1/2 top-1/2 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F6C326]/15 blur-[80px]" />

      {/* Anéis concêntricos girando lentamente — energia / mandala sutil */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="animate-spin-slower">
          <div className="h-[460px] w-[460px] rounded-full border border-[#F6C326]/10" />
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="animate-spin-slower [animation-direction:reverse] [animation-duration:60s]">
          <div className="h-[620px] w-[620px] rounded-full border border-[#F5A12C]/8" />
        </div>
      </div>

      {/* Partículas douradas flutuantes */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#F6C326] animate-float-slow"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            boxShadow: '0 0 8px rgba(246,195,38,0.8)',
          }}
        />
      ))}

      {/* Lótus da marca pulsando suavemente no centro */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          className="relative h-56 w-56 lg:h-72 lg:w-72"
        >
          <Image
            src="/logo-raygus.png"
            alt="Símbolo do Espaço Raygus — lótus com figura em meditação"
            fill
            sizes="(max-width: 1024px) 224px, 288px"
            className="object-contain drop-shadow-[0_0_30px_rgba(245,161,44,0.4)]"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
