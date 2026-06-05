'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeUp, staggerContainer, viewportOnce } from './motion'

export function Space() {
  return (
    <section
      id="espaco"
      className="relative overflow-hidden px-6 py-20 sm:px-10 lg:py-28"
    >
      {/* Brilho dourado ambiente de fundo */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#F5A12C]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#F6C326]">
            O espaço
          </p>
          <h2 className="mt-4 font-serif text-3xl font-light text-[#F0EDE6] text-balance lg:text-5xl">
            Um ambiente concebido para{' '}
            <span className="italic text-gold">reconexão</span> e discrição
          </h2>
          <p className="mt-5 font-sans text-base font-light leading-relaxed text-[#C8C4BB]">
            Do primeiro passo à sala de atendimento, cada detalhe do Raygus foi
            pensado para silenciar o ruído externo e tratar a sua privacidade
            como parte do cuidado.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-5"
        >
          {/* Porta de entrada */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-3xl border border-[#F6C326]/15 md:col-span-2"
          >
            <Image
              src="/clinica-porta.png"
              alt="Entrada do Espaço Raygus com porta dourada e logotipo na recepção"
              width={654}
              height={1163}
              className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0B] via-[#0E0D0B]/20 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <p className="font-serif text-xl text-[#F0EDE6]">A chegada</p>
              <p className="mt-1 font-sans text-sm font-light text-[#C8C4BB]">
                Recepção acolhedora e reservada.
              </p>
            </div>
          </motion.div>

          {/* Corredor */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-3xl border border-[#F6C326]/15 md:col-span-3"
          >
            <Image
              src="/clinica-corredor.png"
              alt="Corredor iluminado do Espaço Raygus com painéis e plantas"
              width={632}
              height={1054}
              className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0B] via-[#0E0D0B]/20 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <p className="font-serif text-xl text-[#F0EDE6]">O percurso</p>
              <p className="mt-1 font-sans text-sm font-light text-[#C8C4BB]">
                Cada passo conduz a um estado de calma.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
