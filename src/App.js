import React, { Component } from 'react';
import './App.css';

import Wrapper from './components/wrapper';
import Header from './components/header';
import Logo from './components/logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper>
          <Header>
            <Logo />
          </Header>
        </Wrapper>
      </div>
    );
  }
}

export default App;
