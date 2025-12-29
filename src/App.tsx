import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import InternshipExperience from './components/InternshipExperience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <InternshipExperience />
      <Projects />
      <Resume />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
