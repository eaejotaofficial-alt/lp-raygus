'use client'

import { motion } from 'framer-motion'
import { Award, Shield, TrendingUp, type LucideIcon } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce } from './motion'

type ProofCard = {
  icon: LucideIcon
  title: string
  body: string
}

const cards: ProofCard[] = [
  {
    icon: Award,
    title: 'Autoridade com método.',
    body: 'Cada terapeuta do Raygus tem formação específica em terapias de reconexão e conduz sessões dentro de um protocolo definido — não de um cardápio. Você é atendido por quem conhece o campo que pratica e registra seu histórico a cada retorno.',
  },
  {
    icon: TrendingUp,
    title: 'Continuidade que acumula resultado.',
    body: 'A primeira sessão abre o caminho da reconexão. As seguintes aprofundam o que foi iniciado. Você entra com uma queixa e sai com um protocolo — e cada retorno parte de onde o anterior terminou, sem recomeços.',
  },
  {
    icon: Shield,
    title: 'Ambiente concebido para quem exige discrição.',
    body: 'O espaço, o atendimento e a comunicação do Raygus tratam a privacidade como parte do cuidado. Nenhum detalhe do seu tratamento ultrapassa o consultório. Você escolhe um lugar de confiança — e esse compromisso é correspondido.',
  },
]

export function Proof() {
  return (
    <section id="protocolo" className="relative px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#F6C326]">
            O método Raygus
          </p>
          <h2 className="mt-4 font-serif text-3xl font-light text-[#F0EDE6] text-balance lg:text-5xl">
            O que diferencia um tratamento de uma{' '}
            <span className="italic text-gold">sessão avulsa</span>
          </h2>
        </motion.div>

        {/* Divisor decorativo dourado */}
        <div className="mx-auto my-10 h-px w-24 bg-gradient-to-r from-transparent via-[#F6C326] to-transparent" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {cards.map(({ icon: Icon, title, body }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              className="group rounded-3xl border border-[#F6C326]/15 bg-gradient-to-b from-[#1A1814] to-[#141210] p-8 transition-all duration-300 hover:border-[#F6C326]/40 hover:shadow-[0_0_50px_-20px_rgba(245,161,44,0.5)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F6C326]/20 bg-[#F6C326]/5 transition-colors duration-300 group-hover:bg-[#F6C326]/10">
                <Icon className="text-[#F6C326]" size={26} aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold text-[#F0EDE6]">
                {title}
              </h3>
              <p className="mt-4 font-sans text-sm font-light leading-relaxed text-[#C8C4BB]">
                {body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
