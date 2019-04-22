import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import AddUser from './Component/addUser';
import About from './Component/aboutUs';
import { BrowserRouter, Route, Link } from "react-router-dom"; 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
                <div>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/users">AddUsers</Link>
                    </li>
                    <li>
                      <Link to="/Aboutus">About us</Link>
                    </li>
                  </ul>
                </div>            
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={AddUser} />
          <Route path="/Aboutus" component={About} />

        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
