'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { fadeUp, viewportOnce } from './motion'

export function Closing() {
  return (
    <section
      id="fechamento"
      className="relative overflow-hidden bg-[#0E0D0B] px-6 py-28 sm:px-10 lg:py-36"
    >
      {/* Brilho dourado ambiente */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5A12C]/10 blur-[140px]" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative mx-auto max-w-2xl text-center"
      >
        <div className="relative mx-auto mb-8 h-16 w-16">
          <Image
            src="/logo-raygus.png"
            alt="Símbolo do Espaço Raygus"
            fill
            sizes="64px"
            className="object-contain drop-shadow-[0_0_20px_rgba(245,161,44,0.5)]"
          />
        </div>

        <h2 className="font-serif text-3xl font-light leading-tight text-[#F0EDE6] text-balance lg:text-5xl">
          O cuidado que você adia toda semana tem um{' '}
          <span className="italic text-gold">lugar para começar</span>.
        </h2>

        <p className="mt-5 font-sans text-base font-light text-[#98999B]">
          Não como visita. Como paciente.
        </p>

        <div className="mx-auto my-10 h-px w-16 bg-gradient-to-r from-transparent via-[#F6C326] to-transparent" />

        <a
          href="#"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F6C326] to-[#F5A12C] px-9 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-[#0E0D0B] transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(245,161,44,0.85)]"
        >
          Iniciar meu tratamento
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
        <p className="mt-5 font-serif text-base italic text-[#98999B]">
          Onde o cuidado vira tratamento.
        </p>
      </motion.div>
    </section>
  )
}
