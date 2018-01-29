import React from 'react';
import styled from 'styled-components';

import img from '../images/dark-bg.jpg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-attachment: fixed;
  width: 100vw;
  padding: 0;
  margin: 0;
`;

export default Wrapper;