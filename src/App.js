import Header from './components/Header';
import Home from './components/Home';
import Proyects from './components/Proyects'
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './styles/App.scss';


function App() {

  return (
    <div className="App" style={{
      background: 'radial-gradient(circle, rgba(217,26,42,1) 0%, rgba(13,40,80,1) 99%)'
    }}>
      <Router>
        <Header></Header>
        <Home></Home>
        <About></About>
        <Proyects></Proyects>
        <Skills/>
      </Router>
    </div>
  );
}

export default App;
