import React from 'react';
import styled from 'styled-components';

export const CommentUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;

  & h3,
  & p {
    word-break: break-all;
  }

  & img {
    border-radius: 50%;
  }
`;

export const CommentControls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 9%;
  text-align: center;

  & .MuiButton-contained {
    margin-right: 5px;
  }

  & .MuiButton-contained:last-of-type {
    margin-right: 0;
  }
`;

export const CommentContainer = styled.li`
  display: flex;
  padding: 5px;

  & p,
  & h3 {
    margin: 0;
  }
`;

export const CommentText = styled.p`
  width: 75%;
  word-break: break-all;
`;

export const Raiting = styled.p`
  font-size: 50px;
`;