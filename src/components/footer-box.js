import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.div`
  position: relative;
  flex: 1;
  padding: 2em;
  color: #b6b6b6;
  & p {
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
  }
  & svg {
    font-size: 1.5em;
    padding-right: 1em;
  }
`;

export default FooterBox;