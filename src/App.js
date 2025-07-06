import './App.css';
import About from'./components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';
import Other from './components/Other';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Other />
    </div>
  );
}

export default App;
