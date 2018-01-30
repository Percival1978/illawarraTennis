import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  background: transparent;
  color: white;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 200px;
  margin-top: -40vh;
  @media only screen and (max-width: 1023px ) {
    flex-direction: column;
  }
`;

export default Footer;