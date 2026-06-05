'use client'

import Image from 'next/image'

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3" aria-label="Espaço Raygus — início">
          <Image
            src="/logo-raygus.png"
            alt="Logo Espaço Raygus"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="hidden font-serif text-xl font-medium tracking-wide text-[#F0EDE6] sm:block">
            Espaço Raygus
          </span>
        </a>

        {/* Navegação */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {[
            { label: 'O método', href: '#protocolo' },
            { label: 'Para quem é', href: '#para-quem' },
            { label: 'A equipe', href: '#equipe' },
            { label: 'O espaço', href: '#espaco' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-xs uppercase tracking-[0.18em] text-[#C8C4BB] transition-colors duration-300 hover:text-[#F6C326]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#fechamento"
          className="rounded-full bg-gradient-to-r from-[#F6C326] to-[#F5A12C] px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-widest text-[#0E0D0B] transition-all duration-300 hover:shadow-[0_0_24px_-4px_rgba(245,161,44,0.7)]"
        >
          Agendar
        </a>
      </div>
    </header>
  )
}
