import './App.css';
import Header from './comp/Header/Header';
import Banner from './comp/Banner/Banner';
import Skills from './comp/Skills/Skills';
import Projects from './comp/Projects/Projects';
import Contact from './comp/Contact/Contact';
import About from './comp/About/About';

function App() {
  return (
      <div className="app">
        <Header></Header>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
    </div>
  );
}

export default App;
