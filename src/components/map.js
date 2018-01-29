import React from 'react';
import styled from 'styled-components';

const Map = styled.iframe`
  height: 90vh;
  width: 99.4%;
  overflow-x: hidden;
  border: none;
  position: absolute;
  @media only screen and (max-device-width: 1024px) {
    width: 100%;
  }
`;

export default Map;