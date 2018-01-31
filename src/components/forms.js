import React from 'react';
import styled from 'styled-components';

const Forms = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: column;
  color: #b1b1b1;
  & a {
    max-width: 50%;
    padding-left: 1em;
    line-height: 2em;
    margin: 10px 10px 10px 0;
    display: block;
    border: 2px solid #5b5b5b;
    border-radius: 0 10px 0 0;
    text-decoration: none;
    color: #828282;
    @media only screen and (max-width: 700px) {
      max-width: 90%;
    }
    &:hover {
      background-color: #b1b1b1;
      color: #000;
    }
  }
  & svg {
    padding-right: 1em;
    padding-top: 0.4em;
    font-size: larger;
    &:first-child {
      vertical-align: text-bottom!important;
    }
    &:last-child {
      float: right;
      padding-top: 0.4em;
    }
  }
`;

export default Forms;