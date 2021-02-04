import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Inicio from './components/pages/Inicio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Productos from './components/pages/Productos';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Inicio} />
          <Route path='/productos' component={Productos} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
