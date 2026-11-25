import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="obsah" tabIndex={-1} className="outline-none">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
