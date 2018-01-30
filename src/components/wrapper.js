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
  width: 100vw;
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-size: 18px;
`;

export default Wrapper;