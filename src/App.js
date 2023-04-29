import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Modify from './pages/Modify';
import About from './pages/About';
import Loading from './pages/Loading';

export default function App() {
  return (
    <div className="container mx-auto bg-black h-screen w-screen text-white">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/modify" element={<Modify />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}