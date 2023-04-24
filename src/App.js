import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Modify from './pages/Modify';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/modify" element={<Modify />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}