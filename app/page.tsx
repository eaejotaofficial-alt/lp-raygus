import { Audience } from '@/components/raygus/audience'
import { Closing } from '@/components/raygus/closing'
import { Footer } from '@/components/raygus/footer'
import { Hero } from '@/components/raygus/hero'
import { Navbar } from '@/components/raygus/navbar'
import { Proof } from '@/components/raygus/proof'
import { Space } from '@/components/raygus/space'
import { TherapistsCarousel } from '@/components/raygus/therapists-carousel'

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0E0D0B]">
      <Navbar />
      <Hero />
      <Proof />
      <Audience />
      <Space />
      <TherapistsCarousel />
      <Closing />
      <Footer />
    </main>
  )
}
