'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Leaf } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { fadeUp, viewportOnce } from './motion'

type Therapist = {
  photo?: string
  role: string
  name: string
  description: string
}

/* Foto da Rayanne em /public/rayanne.jpg — duplicar o objeto para completar os 8 terapeutas */
const therapists: Therapist[] = [
  {
    photo: '/rayanne.jpg',
    role: 'Fundadora · Criadora do Método Raygus',
    name: 'Rayanne Araújo',
    description:
      'Rayanne Araújo fundou o Espaço Raygus em 2020 com uma missão: reconectar você com seu próprio corpo. Criadora do método Raygus, ela atende pessoalmente desde 2019 e hoje lidera uma equipe de 8 terapeutas que ela mesma treina. Mais de 7.700 horas de atendimento pessoal e 200.000+ horas de terapia aplicadas pela equipe.',
  },
  {
    role: 'Terapeuta · Método Raygus',
    name: 'Nome da Terapeuta',
    description:
      'Placeholder — apresentação da terapeuta (formação no Método Raygus, foco em reconexão e auto-entendimento, acompanhamento contínuo). Substituir por bio real quando disponível.',
  },
  {
    role: 'Terapeuta · Método Raygus',
    name: 'Nome da Terapeuta',
    description:
      'Placeholder — apresentação da terapeuta (formação no Método Raygus, foco em reconexão e auto-entendimento, acompanhamento contínuo). Substituir por bio real quando disponível.',
  },
]

const slideVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -40 : 40 }),
}

export function TherapistsCarousel() {
  const [[index, direction], setState] = useState<[number, number]>([0, 0])
  const total = therapists.length
  const current = therapists[index]

  const paginate = (dir: number) => {
    setState([(index + dir + total) % total, dir])
  }

  const goTo = (target: number) => {
    setState([target, target > index ? 1 : -1])
  }

  return (
    <section id="equipe" className="border-t border-[#F6C326]/10 bg-[#0E0D0B] px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center"
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#98999B]">
            Equipe
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-light text-[#F0EDE6] text-balance lg:text-5xl">
            Conheça quem conduz a sua reconexão
          </h2>
          <div className="mx-auto my-8 h-px w-24 bg-gradient-to-r from-transparent via-[#F6C326] to-transparent" />
        </motion.div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-[#F6C326]/15 bg-gradient-to-b from-[#1A1814] to-[#141210] shadow-[0_0_60px_-30px_rgba(245,161,44,0.5)]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-3"
            >
              {/* Foto — 1/3 */}
              <div className="relative min-h-[320px] lg:min-h-[460px]">
                {current.photo ? (
                  <Image
                    src={current.photo || '/placeholder.svg'}
                    alt={`Retrato de ${current.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#141210]">
                    <Leaf
                      className="text-[#F6C326]/30"
                      size={40}
                      aria-hidden="true"
                    />
                    <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#98999B]/50">
                      Foto — Retrato 2:3
                    </span>
                  </div>
                )}
              </div>

              {/* Conteúdo — 2/3 */}
              <div className="flex flex-col justify-center p-8 lg:col-span-2 lg:p-14">
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#98999B]">
                  {current.role}
                </p>
                <h3 className="mt-2 font-serif text-3xl font-light tracking-wide text-[#F0EDE6] lg:text-4xl">
                  {current.name}
                </h3>
                <div className="mt-4 h-px w-20 bg-gradient-to-r from-[#F6C326] to-[#F5A12C]" />
                <p className="mt-6 max-w-xl font-sans text-sm font-light leading-relaxed text-[#C8C4BB]">
                  {current.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controles */}
        <div className="mt-8 flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Selecionar terapeuta">
            {therapists.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Ir para terapeuta ${i + 1}`}
                onClick={() => goTo(i)}
                className={
                  i === index
                    ? 'h-1.5 w-8 rounded-full bg-gradient-to-r from-[#F6C326] to-[#F5A12C] transition-all duration-300'
                    : 'h-1.5 w-1.5 rounded-full bg-[#98999B]/40 transition-all duration-300 hover:bg-[#98999B]/70'
                }
              />
            ))}
          </div>

          {/* Setas */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Terapeuta anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F6C326]/30 text-[#F6C326] transition-colors duration-300 hover:bg-[#F6C326]/10"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Próxima terapeuta"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F6C326]/30 text-[#F6C326] transition-colors duration-300 hover:bg-[#F6C326]/10"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
