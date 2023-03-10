import React, { memo } from 'react';
import styled from 'styled-components';
import { IWrapper } from '../types/interfaces';

/**
 * return element with hidden content, but still available for readers
 * @param   {HTMLElement} tag tag, that will receive visually hidden styles
 * @param   {JSX.Element | string} children text content to render
 * @return  {JSX.Element} visually hidden tag, with provided text inside
*/
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

export default memo(VisuallyHidden);

