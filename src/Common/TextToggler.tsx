import React, { useCallback } from 'react';
import { ITextToggler } from '../types/interfaces';
import styled from 'styled-components';

const Toggle = styled.span`
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;

const TextToggler = ({ toggle, shouldShow, fullyHidden }: ITextToggler): JSX.Element => {
  const getDescription = useCallback(() => {
    if (fullyHidden) {
      return shouldShow ? " ...hide comment" : "Show comment";
    }

    return shouldShow ? " show less" : "...read more";
  }, [shouldShow, fullyHidden]);

  return (
    <Toggle onClick={toggle}>
      {getDescription()}
    </Toggle>
  );
}

export default TextToggler;