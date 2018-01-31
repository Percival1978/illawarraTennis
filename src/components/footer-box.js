import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.div`
  position: relative;
  flex: 1;
  padding: 3em;
  color: #b1b1b1;
  & p {
    margin: 0;
  }
  & h2 {
    margin: 0;
  }
  & ul {
    color: #5b5b5b;
    list-style: none;
    padding: 0;
    line-height: 3em;
  }
  & li a {
    display: inline-block;
    text-decoration: none;
    color: #5b5b5b;
    font-size: initial;
    transition: all 0.3s ease;
    &:hover {
      color: #b1b1b1;
    }
  }
  & svg {
    font-size: 1.5em;
    padding-right: 1em;
    vertical-align: text-bottom!important;
  }
  @media only screen and (max-width: 1023px) {
    padding: 2em;
  }
  @media only screen and (max-width: 400px) {
    padding: 1em;
  }
`;

export default FooterBox;