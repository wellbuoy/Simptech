import { Navigation } from '@/components/ui-custom/Navigation'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Services } from '@/sections/Services'
import { Projects } from '@/sections/Projects'
import { WhyUs } from '@/sections/WhyUs'
import { Contact } from '@/sections/Contact'
import { Footer } from '@/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
