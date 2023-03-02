import React, { useState, useEffect } from 'react';
import { ICommentProps } from '../../types/interfaces';
import { Button } from '@mui/material';

const Comment = ({ data }: ICommentProps): JSX.Element => {
  const [raiting, setRaiting] = useState(data.raiting);

  const onRaitingChange = (e: React.MouseEvent<HTMLElement>) => {
    const { name } = (e.target as HTMLButtonElement);

    setRaiting((state) => name === 'increment' ? state + 1 : state - 1);
  }

  return (
    <li>
      <img src={data.avatar} alt='' />
      <h3>{data.author}</h3>
      <p>{data.comment}</p>
      <p>{data.date}</p>
      <p>{raiting}</p>
      <Button name='increment' onClick={onRaitingChange}>+</Button>
      <Button name='decrement' onClick={onRaitingChange}>-</Button>
    </li>
  );
}

export default Comment;
