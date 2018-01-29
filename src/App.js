import React, { Component } from 'react';
import './App.css';

import Wrapper from './components/wrapper';
import Header from './components/header';
import Logo from './components/logo';
import Main from './components/main';
import Map from './components/map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper>
          <Header>
            <Logo />
          </Header>
          <Main />
          <Main>
            <Map />
          </Main>
        </Wrapper>
      </div>
    );
  }
}

export default App;
