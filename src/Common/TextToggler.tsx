import React, { useCallback } from 'react';
import { ITextToggler } from '../types/interfaces';
import styled from 'styled-components';

const Toggle = styled.span`
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;

/**
 * return span to control over text amount, to show more or hide text content
 * @param   {function} toggle callback to update parent state
 * @param   {boolean} shouldShow flag to show full text or hide it
 * @param   {boolean} fullyHidden flag to indicate, should we render full text or just span to control text
 * @return  {JSX.Element} span, which control text amount
*/
const TextToggler = ({ toggle, shouldShow, fullyHidden }: ITextToggler): JSX.Element => {
  const getDescription = useCallback(() => {
    if (fullyHidden) {
      return shouldShow ? ' ...hide comment' : 'Show comment';
    }

    return shouldShow ? ' show less' : '...read more';
  }, [shouldShow, fullyHidden]);

  return (
    <Toggle onClick={toggle}>
      {getDescription()}
    </Toggle>
  );
}

export default TextToggler;