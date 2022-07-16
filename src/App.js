import Home from './components/Home/Home';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Social from './components/Social/Social';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
function App() {

  

  return (
    <div>
      <Navbar />
      <Home />
      <Social />
      <Skills />
      <Portfolio />

      <Contact />

    </div>
  );
}

export default App;
