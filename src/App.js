import React, { Component } from 'react';
import './App.css';

import Wrapper from './components/wrapper';
import Header from './components/header';
import Logo from './components/logo';
import Main from './components/main';
import Map from './components/map';
import Footer from './components/footer';

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
            <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.379623083923!2d151.14117799999997!3d-33.95708087637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b75591ba9eff%3A0xbade40ecd8074655!2s71+Chapel+St!5e0!3m2!1sen!2sau!4v1396260923372"></Map>
          </Main>
          <Footer>
            <p>
              For booking or for further enquiries please contact us on:
            </p>
            <ul>
              <li><a href="tel:0295672307">Pro-Shop: 02 9567 2307 </a></li>
              <li><a href="tel:0412043129">Manager: Maureen Pearson 0412 043 129 </a></li>
              <li><a href="tel:0413047886">Head Coach: Graham Pearson 0413 047 886 </a></li>
              <li><a href="mailto:grahampearson3237@hotmail.com?subject=Website Enquiry">Email</a></li>
            </ul>
          </Footer>
        </Wrapper>
      </div>
    );
  }
}

export default App;
