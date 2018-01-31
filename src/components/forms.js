import React from 'react';
import styled from 'styled-components';

const Forms = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  height: 300px;
  flex-direction: column;
  color: #b1b1b1;
  & a {
    width: 50%;
    padding-left: 1em;
    line-height: 2em;
    margin: 10px 10px 10px 0;
    display: block;
    flex: 1;
    border: 2px solid #5b5b5b;
    border-radius: 0 10px 0 0;
    text-decoration: none;
    color: #828282;
    transition: all 0.3s ease;
    @media only screen and (max-width: 700px) {
      width: 90%;
    }
    &:hover {
      background-color: #b1b1b1;
      color: #000;
    }
  }
  & svg {
    float: right;
    padding-right: 1em;
    padding-top: 0.4em;
    font-size: larger;
  }
`;

export default Forms;