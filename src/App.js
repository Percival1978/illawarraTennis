import React, { Component } from 'react';
import './App.css';

import Wrapper from './components/wrapper';
import Header from './components/header';
import Logo from './components/logo';
import Main from './components/main';
import Map from './components/map';
import Content from './components/content';
import Footer from './components/footer';
import FooterBox from './components/footer-box';
import Forms from './components/forms';
import MobileBackground from './components/mobile-background';

import adultgroup from './forms/adultgroup.pdf';
import fridayjunior from './forms/fridayjunior.pdf';
import mondaymens from './forms/mondaymens.pdf';
import tenniscamp from './forms/tenniscamp.pdf';
import statement from './forms/statement.pdf';


var FaEnvelope = require('react-icons/lib/fa/envelope');
var FaMobile = require('react-icons/lib/fa/mobile');
var FaPhone = require('react-icons/lib/fa/phone');
var FaCloudDownload = require('react-icons/lib/fa/cloud-download');
var MdDirectionsTransit = require('react-icons/lib/md/directions-transit');
var MdGroup = require('react-icons/lib/md/group');
var MdAccountBalance = require('react-icons/lib/md/account-balance');
var FaChild = require('react-icons/lib/fa/child');
var FaMale = require('react-icons/lib/fa/male');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper>
          <MobileBackground />
          <Header>
            <Logo />
            <p>We are conveniently located a quick walk from Rockdale <MdDirectionsTransit /></p>
          </Header>
          <Main>
            <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.379623083923!2d151.14117799999997!3d-33.95708087637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b75591ba9eff%3A0xbade40ecd8074655!2s71+Chapel+St!5e0!3m2!1sen!2sau!4v1396260923372"></Map>
          </Main>
          <Main>
            <Content>
              <h2>COURT HIRE</h2>
              <p>We have 18 synthetic grass courts available for hire 7 days / week from 8am - 10:30pm.</p>
                <ul>
                  <li>$20 / hour 8am - 5pm</li>
                  <li>$23 / hour 5pm - 10:30pm</li>
                </ul>
              <p>For bookings contact the pro-shop on (02) 9567 2307.</p>
            </Content>
            <Content>
              <h2>FORMS</h2>
              <Forms>
                <a target="_blank" href={adultgroup}><MdGroup /> Adult Group <FaCloudDownload /></a>
                <a target="_blank" href={fridayjunior}><FaChild /> Friday Junior <FaCloudDownload /></a>
                <a target="_blank" href={mondaymens}><FaMale /> Monday Mens <FaCloudDownload /></a>
                <a target="_blank" href={tenniscamp}><FaChild /> Tennis Camp <FaCloudDownload /></a>
                <a target="_blank" href={statement}><MdAccountBalance /> Statement <FaCloudDownload /></a>
              </Forms> 
            </Content>
          </Main>
          <Footer>
            <FooterBox>
              <h2>CONTACT DETAILS</h2>
              <ul>
                <li><a href="tel:0295672307"><FaPhone /> Pro-Shop : 02 9567 2307 </a></li>
                <li><a href="tel:0412043129"><FaMobile /> Manager : 0412 043 129 </a></li>
                <li><a href="tel:0413047886"><FaMobile /> Head Coach : 0413 047 886 </a></li>
                <li><a target="_blank" href="mailto:grahampearson3237@hotmail.com?subject=Website Enquiry"><FaEnvelope /> Email</a></li>
              </ul>
            </FooterBox>
            <FooterBox>
              <Logo />
            </FooterBox>
          </Footer>
        </Wrapper>
      </div>
    );
  }
}

export default App;
