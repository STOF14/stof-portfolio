import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Roadmap from './pages/Roadmap';
import Reading from './pages/Reading';
import About from './pages/About';
import Downloads from './pages/Downloads';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/about" element={<About />} />
        <Route path="/downloads" element={<Downloads />} />
      </Routes>
    </BrowserRouter>
  );
}
