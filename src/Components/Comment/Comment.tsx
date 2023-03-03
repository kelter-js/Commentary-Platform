import React, { useState, useEffect } from 'react';
import { ICommentProps } from '../../types/interfaces';
import { Button } from '@mui/material';
import styled from 'styled-components';
import TextToggler from '../../Common/TextToggler';

const CommentUserContainer = styled.div`
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

const CommentControls = styled.div`
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

const CommentContainer = styled.li`
  display: flex;
  padding: 5px;

  & p,
  & h3 {
    margin: 0;
  }
`;

const CommentText = styled.p`
  width: 75%;
  word-break: break-all;
`;

const Raiting = styled.p`
  font-size: 50px;
`;

const BAD_RAITING = -10;

const Comment = ({ data }: ICommentProps): JSX.Element => {
  const [raiting, setRaiting] = useState(data.raiting);
  const [isReadMore, setIsReadMore] = useState(false);

  const onRaitingChange = (e: React.MouseEvent<HTMLElement>) => {
    const { name } = (e.target as HTMLButtonElement);

    setRaiting((state) => name === 'increment' ? state + 1 : state - 1);
  }

  useEffect(() => {
    return () => URL.revokeObjectURL(data.avatar);
  }, []);

  const toggleReadMore = () => {
    setIsReadMore((state) => !state);
  }

  const getCommentText = (text: string) => {
    if (raiting <= BAD_RAITING) {
      return (
        <>
          {isReadMore && text}
          <TextToggler toggle={toggleReadMore} shouldShow={isReadMore} fullyHidden />
        </>
      );
    }

    if (text.length > 150) {
      return (
        <>
          {isReadMore ? text : text.slice(0, 150)}
          <TextToggler toggle={toggleReadMore} shouldShow={isReadMore} />
        </>
      );
    }

    return text;
  }

  console.log(raiting)

  return (
    <CommentContainer>
      <CommentUserContainer>
        <h3>{data.author.slice(0, 50)}</h3>
        <img src={data.avatar} alt='' width={100} height={100} />
        <p>{data.email}</p>
        <p>{data.date.toString()}</p>
      </CommentUserContainer>

      <CommentText>{getCommentText(data.comment)}</CommentText>

      <CommentControls>
        <Raiting>{raiting}</Raiting>
        <div>
          <Button variant='contained' name='increment' onClick={onRaitingChange}>+</Button>
          <Button variant='contained' name='decrement' onClick={onRaitingChange}>-</Button>
        </div>
      </CommentControls>
    </CommentContainer>
  );
}

export default Comment;
