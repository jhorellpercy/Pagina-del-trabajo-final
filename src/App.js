import './App.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Cursos from './components/Cursos';
import Companeros from './components/Companeros';

function App() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Cursos />
      <Contact />
      <footer>
        <p>© 2025 Jhorell Percy Condori Guzmán</p>
      </footer>
      <Companeros/>
    </>
  );
}

export default App;