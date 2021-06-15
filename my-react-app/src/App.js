import './App.css';
import React from 'react';
import { Switch, Route, NavLink, useHistory, Link } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import Pros from './Pros';
import Contact from './Contact';

function App() {
  return (
    <div>

      <nav className="navBar">
        <ul>
          <Link to='/'><li>home</li></Link>
          <Link to={'/Contact'}><li>contact</li></Link>
          <Link to={`/Projects`}><li>projects</li></Link>
          <Link to={`/Pros`}><li>proficiencies</li></Link>
        </ul>
      </nav>

      {/* <Switch>
        <Route exact path='/' render={(props) => <Home {...props} />} />
        <Route exact path='/Contact' render={() => <Contact />} />
        <Route exact path='/Projects' render={() => <Projects />} />
        <Route exact path='/Pros' render={() => <Pros />} />
      </Switch> */}

    </div>
  );
}

export default App;
