import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { SpecialtiesBento } from "@/components/sections/specialties-bento"
import { CapabilitiesRadar } from "@/components/sections/capabilities-radar"
import { ProjectsRealized } from "@/components/sections/projects-realized"
import { ProcessOrbital } from "@/components/sections/process-orbital"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="site-content">
        <Services />
        <SpecialtiesBento />
        <CapabilitiesRadar />
        <ProjectsRealized />
        <ProcessOrbital />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
