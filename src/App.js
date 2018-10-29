import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import LoginForm from './components/LoginForm';
import Banner from './components/Home';
import NavigationBar from './components/Nav';


const LoginFormStyles = styled.div `
  padding-top: 5rem;
  padding-left: 10rem;
`
class App extends Component {
  render() {
    return (
      <div>
          <NavigationBar />
          <LoginFormStyles>
            <LoginForm />
          </LoginFormStyles>
          <Banner />
      </div>
    )
  }
}

export default App;
