import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 100px;
  background: transparent;
  color: white;
  position: absolute;
  bottom: 0;
  & a {
    color: white;
    text-decoration: none;
  }
`;

export default Footer;