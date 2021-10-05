import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../Header/Header.css'
import Home from "../Body/Home";
import Users from "../Body/Users";
import About from "../Body/About";

export default function Header() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home" className= 'nav'>Home</Link>
            </li>
            <li>
              <Link to="/about" className= 'nav'>About</Link>
            </li>
            <li>
              <Link to="/users" className= 'nav'>Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}