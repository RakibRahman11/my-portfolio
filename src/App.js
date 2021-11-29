import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Email from './components/HomePage/Contact/Email/Email';
import Footer from './components/HomePage/Footer/Footer';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage></HomePage>
        </Route>
        <Route exact path='/email'>
          <Email></Email>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
