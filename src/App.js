import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

// Pages
import Edit from './pages/Edit';
import Landing from './pages/Landing';
import New from './pages/New';
import NotStarted from './pages/NotStarted';
import Started from './pages/Started';

function App() {
  return (
      <Router>
        <AppRoutes/>
      </Router>
  );
}

function AppRoutes() {
  return <>
    <Route exact path="/"><Landing/></Route>
    <Route exact path="/new"><New/></Route>
    <Route exact path="/edit"><Edit/></Route>
    <Route exact path="/party/:id"><Started/></Route>
    <Route exact path="/party/:id"><NotStarted/></Route>
  </>;
}

export default App;
