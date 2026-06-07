import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Projects />
        <Services />
      </main>
      <Contact />
    </>
  )
}
