import React, { Component } from 'react';
import './App.css';

import LoginForm from './components/LoginForm';
import Banner from './components/Home';



class App extends Component {
  render() {
    return (
      <div>
          <LoginForm />
          <Banner />
      </div>
    )
  }
}

export default App;
