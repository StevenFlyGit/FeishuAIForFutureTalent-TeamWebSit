import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { SelectedWorks } from "@/components/sections/selected-works"
import { ClientLogos } from "@/components/sections/client-logos"
import { Testimonials } from "@/components/sections/testimonials"
import { Awards } from "@/components/sections/awards"
import { Insights } from "@/components/sections/insights"
import { FinalCTA } from "@/components/sections/final-cta"
import { GradientBar } from "@/components/ui/gradient-bar"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <SelectedWorks />
        <ClientLogos />
        <Testimonials />
        <Awards />
        <Insights />
        <FinalCTA />
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
