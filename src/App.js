import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Animals from "./Animals";
import Nature from "./Nature";
import Contact from "./Contact";
import Home from "./Home";
import Test from "./Test";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Life on Earth</h1>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    Our Planet
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Animals" className="nav-link">
                    Animals
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Nature" className="nav-link">
                    Nature
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Test" className="nav-link">
                    People
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/Animals" component={Animals} />
          <Route path="/Nature" component={Nature} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Test" component={Test} />
          <Route path="/Test/:id" component={Test} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
