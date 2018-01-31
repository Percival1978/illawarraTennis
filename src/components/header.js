import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  height: 80vh;
  padding: 5em 3em;
  color: #b1b1b1;
  position: relative;
  @media only screen and (max-width: 1023px) {
    padding: 5em 2em;
  }
  & p {
    position: absolute;
    top: 90vh;
    max-width: 80vw;
  }
  & svg {
    font-size: larger;
    vertical-align: text-bottom!important;
  }
`;

export default Header;