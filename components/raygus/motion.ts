import type { Variants } from 'framer-motion'

/* Padrão global on-scroll: fade-up sutil, sem bounce/spring. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

/* Container com stagger leve para cards e blocos duplos. */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

/* Viewport padrão reutilizável para whileInView. */
export const viewportOnce = { once: true, margin: '-80px' } as const
