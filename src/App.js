import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Email from './components/HomePage/Contact/Email/Email';
import Footer from './components/HomePage/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import DeliverySolutions from './components/HomePage/MyProjects/DeliverySolutions/DeliverySolutions';
import MedicoPharmacy from './components/HomePage/MyProjects/MedicoPharmacy/MedicoPharmacy';
import RuvaraTees from './components/HomePage/MyProjects/RuvaraTees/RuvaraTees';

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
        <Route exact path='/ruvaraTees'>
          <RuvaraTees></RuvaraTees>
        </Route>
        <Route exact path='/deliverySolutions'>
          <DeliverySolutions></DeliverySolutions>
        </Route>
        <Route exact path='/medicoPharmacy'>
          <MedicoPharmacy></MedicoPharmacy>
        </Route>
        <Route exact path='/blogs'>
          <Blogs></Blogs>
        </Route>
        <Route exact path='/about'>
          <About></About>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
