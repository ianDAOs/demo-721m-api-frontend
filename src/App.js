import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Retail from './pages/Retail';

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