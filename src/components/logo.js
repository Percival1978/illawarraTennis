import React from 'react';
import styled from 'styled-components';
import img from '../images/logo.png';

const Logo = styled.div`
  width: 500px;
  max-width: 80vw;
  height: 160px;
  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;
`;

export default Logo;