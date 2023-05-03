import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Modify from './pages/Modify';
import About from './pages/About';
import Loading from './pages/Loading';

export default function App() {
  return (
    <div className="bg-black w-screen h-screen m-0 p-0 overflow-x-hidden overflow-y-scroll">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path="/modify" element={<Modify />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}