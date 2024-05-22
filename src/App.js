import { BrowserRouter as Router, Route, Switch, Routes  } from 'react-router-dom';
import './styles/styles.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Talleres from './components/Talleres';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <>
              <Header />
              <About />
            </>
          } />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/talleres" element={<Talleres />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
