import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  background: transparent;
  color: white;
  line-height: 2em;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 200px;
  margin-top: -40vh;
  & a {
    color: white;
    text-decoration: none;
  }
  @media only screen and (max-width: 1024px ) {
    flex-direction: column;
  }
`;

export default Footer;