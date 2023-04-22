import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Retail from './pages/Retail';
import Membership from './pages/Membership';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Retail} />
        <Route path="/retail" component={Retail} />
        <Route path="/membership" component={Membership} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;