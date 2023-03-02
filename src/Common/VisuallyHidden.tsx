import React from 'react';
import styled from 'styled-components';
import { IWrapper } from '../types/interfaces';

const VisuallyHidden = ({ tag, children }: IWrapper): JSX.Element => {
  const Container = styled(tag)`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  `;

  return (<Container>{children}</Container>);
};

export default VisuallyHidden;

