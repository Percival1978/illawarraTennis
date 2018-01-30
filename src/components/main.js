import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  min-height: 90vh;
  width: 100%;
  background-color: transparent;
  margin-bottom: 50vh;
  position: relative;
  display: flex;
  @media only screen and (max-width: 1023px) {
    flex-direction: column;
  }
`;

export default Main;