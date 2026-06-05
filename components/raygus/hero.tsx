'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { GoldAmbient } from './gold-ambient'

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background interativo dourado — ocupa toda a seção, texto fica por cima à esquerda */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <GoldAmbient />
      </div>
      {/* Fade de transição entre texto e ambiente */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-40 -translate-x-1/2 bg-gradient-to-r from-[#0E0D0B] to-transparent lg:block" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Coluna esquerda — texto (metade da largura) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="z-10 flex flex-col justify-center px-6 pb-20 pt-32 sm:px-10 lg:pb-0 lg:pr-12"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#F6C326]/30 bg-[#F6C326]/5 px-4 py-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#F6C326]">
            Clínica de reconexão · Fortaleza
          </span>

          <h1 className="mt-7 max-w-xl font-serif text-4xl font-light leading-[1.08] text-[#F0EDE6] text-balance sm:text-5xl">
            Você não precisa de mais uma sessão. Precisa de um{' '}
            <span className="text-gold font-medium italic">tratamento</span>.
          </h1>

          <p className="mt-6 max-w-md font-sans text-base font-light leading-relaxed text-[#C8C4BB]">
            O Espaço Raygus une terapia de reconexão corporal, ambiente clínico
            premium e acompanhamento contínuo — para quem entende que reconexão
            real exige protocolo, não apenas presença.
          </p>

          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#fechamento"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F6C326] to-[#F5A12C] px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-[#0E0D0B] transition-all duration-300 hover:shadow-[0_0_32px_-6px_rgba(245,161,44,0.8)]"
            >
              Iniciar meu tratamento
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#protocolo"
              className="inline-flex items-center justify-center rounded-full border border-[#F6C326]/40 px-7 py-3.5 font-sans text-sm uppercase tracking-widest text-[#F6C326] transition-all duration-300 hover:bg-[#F6C326]/10"
            >
              Conheça o método
            </a>
          </div>

          <p className="mt-8 font-serif text-lg italic text-[#98999B]">
            Onde o cuidado vira tratamento.
          </p>
        </motion.div>

        {/* Coluna direita — placeholder visível em mobile (ambiente em telas grandes) */}
        <div className="relative flex min-h-[280px] items-center justify-center lg:hidden">
          <GoldAmbient />
        </div>
      </div>

      {/* Linha dourada inferior */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F6C326]/40 to-transparent" />
    </section>
  )
}
