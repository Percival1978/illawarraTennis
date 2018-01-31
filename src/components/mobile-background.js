import React from 'react';
import styled from 'styled-components';

import mobimg from '../images/dark-bg-mob.jpg';
import tabimg from '../images/dark-bg-tab.jpg';

const MobileBackground = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1;
  background-image: none;
  background-color: transparent;
  @media only screen and (max-width: 1200px) {
    background-image: url(${tabimg});
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media only screen and (max-width: 500px) {
    background-image: url(${mobimg});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export default MobileBackground;