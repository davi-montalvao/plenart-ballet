import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { AboutFernanda } from "@/components/about-fernanda"
import { BalletSteps } from "@/components/ballet-steps"
import { ClassStructure } from "@/components/class-structure"
import { Classes } from "@/components/classes"
import { Schedule } from "@/components/schedule"
import { Instructors } from "@/components/instructors"
import { SpectacleTeaser } from "@/components/spectacle-teaser"
import { Spectacle } from "@/components/spectacle"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <AboutFernanda />
      <Instructors />
      <SpectacleTeaser />
      <Spectacle />
      <Classes />
      <BalletSteps />
      <ClassStructure />
      <Schedule />
      <Contact />
      <Footer />
    </main>
  )
}
