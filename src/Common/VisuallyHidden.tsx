import React from 'react';
import styled from 'styled-components';

interface IVisuallyHidden { children: React.ReactNode }

const Hider = styled.h1`
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

const VisuallyHidden = ({ children }: IVisuallyHidden): JSX.Element => {
  return (
    <Hider>
      {children}
    </Hider>
  );
}

export default VisuallyHidden;

