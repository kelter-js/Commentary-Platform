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

  @media (max-width: 1300px)  {
    width: 20%;
  }
`;

export const CommentControls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 10%;
  text-align: center;

  & .MuiButton-contained {
    margin-right: 5px;
  }

  & .MuiButton-contained:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 1300px)  {
    width: 15%;
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
  padding: 3px;
  word-break: break-all;
`;

export const Raiting = styled.p`
  font-size: 50px;
`;