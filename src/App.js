import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Change from './pages/Change';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/change" element={<Change />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}