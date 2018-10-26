import React, { Component } from 'react';
import './App.css';

import LoginForm from './components/LoginForm';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <LoginForm />
        <Home />
      </div>
    )
  }
}

export default App;
