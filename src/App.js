import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import About from './Components/About';
import Portfolio from './Components/Portfolio';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/about' component={About} />
          <Route exact path='/portfolio' component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
