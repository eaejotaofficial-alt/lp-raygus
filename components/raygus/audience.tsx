'use client'

import { motion } from 'framer-motion'
import { Briefcase, User, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import { fadeUp, staggerContainer, viewportOnce } from './motion'

type Persona = {
  icon: LucideIcon
  eyebrow: string
  title: string
  body: string
}

const personas: Persona[] = [
  {
    icon: User,
    eyebrow: 'Para a profissional',
    title:
      'Para a profissional que acumula tensão e não encontra tempo para si.',
    body: 'Você não precisa de mais um lugar para relaxar por uma hora. Precisa de um espaço que a reconheça como paciente, acompanhe sua reconexão e esteja lá quando você precisar voltar a si.',
  },
  {
    icon: Briefcase,
    eyebrow: 'Para o executivo',
    title: 'Para o executivo que exige resultado e não tolera amadorismo.',
    body: 'Protocolo definido, terapeuta com autoridade técnica, ambiente sem ruído. Você sai com clareza mental e reconexão consigo reestabelecida — não com a sensação de que poderia ter ficado em casa.',
  },
]

export function Audience() {
  return (
    <section
      id="para-quem"
      className="border-t border-[#F6C326]/10 bg-[#141210] px-6 py-20 sm:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Coluna texto */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#F6C326]">
                Para quem é
              </p>
              <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-[#F0EDE6] text-balance lg:text-[2.75rem]">
                Construído para quem já sabe o que uma{' '}
                <span className="italic text-gold">sessão avulsa</span> não
                entrega.
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-10 flex flex-col gap-5"
            >
              {personas.map(({ icon: Icon, eyebrow, title, body }) => (
                <motion.div
                  key={eyebrow}
                  variants={fadeUp}
                  className="rounded-3xl border border-[#F6C326]/15 bg-gradient-to-b from-[#1A1814] to-[#141210] p-7 transition-all duration-300 hover:border-[#F6C326]/40"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#F6C326]/20 bg-[#F6C326]/5">
                      <Icon
                        className="text-[#F5A12C]"
                        size={20}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#98999B]">
                      {eyebrow}
                    </p>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-[#F0EDE6] text-balance">
                    {title}
                  </h3>
                  <p className="mt-3 font-sans text-sm font-light leading-relaxed text-[#C8C4BB]">
                    {body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Coluna imagem da clínica + depoimento */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:sticky lg:top-24"
          >
            <div className="relative overflow-hidden rounded-3xl border border-[#F6C326]/15">
              <Image
                src="/clinica-corredor.png"
                alt="Corredor do Espaço Raygus, com painéis e iluminação acolhedora"
                width={632}
                height={1054}
                className="h-[420px] w-full object-cover lg:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0B] via-[#0E0D0B]/40 to-[#0E0D0B]/10" />

              {/* Depoimento sobreposto */}
              <figure className="absolute inset-x-0 bottom-0 p-7">
                <blockquote className="font-serif text-lg italic leading-relaxed text-[#F0EDE6]">
                  &ldquo;Pela primeira vez senti que estava em tratamento, não
                  apenas em uma sessão. Cada retorno parte de onde o anterior
                  terminou.&rdquo;
                </blockquote>
                <figcaption className="mt-3 font-sans text-[11px] uppercase tracking-[0.2em] text-[#F6C326]">
                  — Paciente recorrente · Fortaleza
                </figcaption>
              </figure>
            </div>

            <a
              href="#fechamento"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#F6C326] to-[#F5A12C] px-10 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-[#0E0D0B] transition-all duration-300 hover:shadow-[0_0_32px_-6px_rgba(245,161,44,0.8)]"
            >
              Falar com um especialista
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
