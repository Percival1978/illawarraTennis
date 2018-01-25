import React from 'react';
import styled from 'styled-components';
import img from '../dark-bg.jpg';

const Header = styled.header`
  display: flex;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 0;
  height: 100vh;
  width: 100%;
`;

export default Header;