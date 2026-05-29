import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import ContactForm from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
