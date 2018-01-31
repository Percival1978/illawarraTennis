import React from 'react';
import styled from 'styled-components';

import img from '../images/dark-bg.jpg';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-attachment: fixed;
  padding: 0;
  margin: 0;
  font-size: 18px;
  @media only screen and (max-width: 1024px) {
    background-image: none;
  }
`;

export default Wrapper;