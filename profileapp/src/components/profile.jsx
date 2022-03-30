import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Profile() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. 
            *Switch was replaced by Routes in v6*/}
        <Routes>
          <Route path="/about" element = {<About />} />
          <Route path="/users" element = {<Users />} />
          <Route path="/" element = {<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home it is</h2>;
}

function About() {
  return <h2>About Me</h2>;
}

function Users() {
  return <h2>Users</h2>;
}