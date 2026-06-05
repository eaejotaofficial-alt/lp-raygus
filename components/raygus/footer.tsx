import { MapPin } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-[#F6C326]/10 bg-[#0A0908] px-6 py-12 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        {/* Esquerda — logotipo / assinatura */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo-raygus.png"
            alt="Logo Espaço Raygus"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
          <div>
            <p className="font-serif text-xl font-medium text-[#F0EDE6]">
              Espaço Raygus
            </p>
            <p className="mt-0.5 font-serif text-sm italic text-[#98999B]">
              Onde o cuidado vira tratamento.
            </p>
          </div>
        </div>

        {/* Direita — localização */}
        <div className="flex items-center gap-2 text-[#98999B]">
          <MapPin size={14} aria-hidden="true" />
          <span className="font-sans text-sm font-light">Fortaleza, CE</span>
        </div>
      </div>

      <p className="mt-8 text-center font-sans text-xs font-light text-[#98999B]/50">
        © 2026 Espaço Raygus. Todos os direitos reservados.
      </p>
    </footer>
  )
}
