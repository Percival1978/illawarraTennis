import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  height: 100vh;
  width: 100%;
  padding: 5em 3em;
  @media only screen and (max-width: 1023px) {
    padding: 2em;
  }
`;

export default Header;