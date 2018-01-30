import React from 'react';
import styled from 'styled-components';

const Forms = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  height: 300px;
  padding: 2em;
  flex-direction: column;
  color: #828282;
  & a {
    padding-left: 1em;
    line-height: 2em;
    margin: 10px;
    display: block;
    flex: 1;
    border: 1px solid #5b5b5b;
    text-decoration: none;
    color: #828282;
  }
  & svg {
    float: right;
    padding-right: 1em;
    padding-top: 0.4em;
    font-size: larger;
  }
`;

export default Forms;