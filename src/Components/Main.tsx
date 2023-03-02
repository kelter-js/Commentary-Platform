import React from 'react';
import styled from 'styled-components';
import { IWrapper } from '../types/interfaces';

const Main = styled.div`
  min-width: 80vw;
  height: 650px;
  border: 1px solid black;
`;

const MainContainer = ({ children }: IWrapper): JSX.Element => {
  return (
    <Main>
      {children}
    </Main>
  );
}

export default MainContainer;

