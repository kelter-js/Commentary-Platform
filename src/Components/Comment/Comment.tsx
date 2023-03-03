import React, { useState, useEffect } from 'react';
import { ICommentProps } from '../../types/interfaces';
import { Button } from '@mui/material';
import styled from 'styled-components';

const CommentUserContainer = styled.div`
`;

const CommentControls = styled.div`
`;

const CommentContainer = styled.li`
  display: flex;
  padding: 5px;

  & p,
  & h3 {
    margin: 0;
  }
`;

const Comment = ({ data }: ICommentProps): JSX.Element => {
  const [raiting, setRaiting] = useState(data.raiting);

  const onRaitingChange = (e: React.MouseEvent<HTMLElement>) => {
    const { name } = (e.target as HTMLButtonElement);

    setRaiting((state) => name === 'increment' ? state + 1 : state - 1);
  }

  console.log(raiting)


  /*URL.revokeObjectURL(objectUrl)*/

  return (
    <CommentContainer>
      <CommentUserContainer>
        <h3>{data.author}</h3>
        <img src={data.avatar} alt='' width={100} height={100} />
        <p>{data.email}</p>
        <p>{data.date.toString()}</p>
      </CommentUserContainer>

      <p>{data.comment}</p>

      <CommentControls>
        <p>{raiting}</p>
        <Button name='increment' onClick={onRaitingChange}>+</Button>
        <Button name='decrement' onClick={onRaitingChange}>-</Button>
      </CommentControls>
    </CommentContainer>
  );
}

export default Comment;
