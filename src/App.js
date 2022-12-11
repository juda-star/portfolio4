import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Project from './components/pages/Project/Project';
import Contact from './components/pages/Contact/Contact';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Project" element={<Project/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
