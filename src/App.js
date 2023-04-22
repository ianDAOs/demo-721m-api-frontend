import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Retail from './pages/Retail';
import Membership from './pages/Membership';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Retail />} />
        <Route path="/retail" element={<Retail />} />
      </Routes>
    </Router>
  );
}

export default App;