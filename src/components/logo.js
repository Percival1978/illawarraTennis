import React from 'react';
import styled from 'styled-components';
import img from '../logo.png';

const Logo = styled.div`
  width: 500px;
  height: 160px;
  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 10vh;
  left: 10vw;
`;

export default Logo;