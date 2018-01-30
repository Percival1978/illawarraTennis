import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  background: transparent;
  color: white;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: -40vh;
  padding-top: 10vh;
  border-top: 1px solid #4e4e4e;
  @media only screen and (max-width: 1023px ) {
    flex-direction: column;
  }
`;

export default Footer;