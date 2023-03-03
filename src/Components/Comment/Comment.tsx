import React, { useState, useEffect } from 'react';
import { ICommentProps } from '../../types/interfaces';
import { Button } from '@mui/material';
import TextToggler from '../../Common/TextToggler';
import getTimeDescription from '../../utils/timeFormatter';
import * as S from './CommentStyles';
import { BAD_RAITING, MINUTE } from '../../utils/constants';


/**
 * return commentary item
 * @param   {object} data commentary data, including all information to render comment UI
 * @return  {JSX.Element} li of commentary, avatar, email, author name, creation date, text and raiting
*/
const Comment = ({ data }: ICommentProps): JSX.Element => {
  const [raiting, setRaiting] = useState(data.raiting);
  const [isReadMore, setIsReadMore] = useState(false);
  const [timeDescription, setTimeDescription] = useState(getTimeDescription(data.date));

  const onRaitingChange = (e: React.MouseEvent<HTMLElement>) => {
    const { name } = (e.target as HTMLButtonElement);

    setRaiting((state) => name === 'increment' ? state + 1 : state - 1);
  }

  useEffect(() => {
    return () => URL.revokeObjectURL(data.avatar);
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeDescription(getTimeDescription(data.date));
    }, MINUTE);

    return () => clearInterval(timerId);
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

  return (
    <S.CommentContainer>
      <S.CommentUserContainer>
        <h3>{data.author}</h3>
        <img src={data.avatar} alt='' width={100} height={100} />
        <p>{data.email}</p>
        <p>{timeDescription}</p>
      </S.CommentUserContainer>

      <S.CommentText>{getCommentText(data.comment)}</S.CommentText>

      <S.CommentControls>
        <S.Raiting>{raiting}</S.Raiting>
        <div>
          <Button variant='contained' name='increment' onClick={onRaitingChange}>+</Button>
          <Button variant='contained' name='decrement' onClick={onRaitingChange}>-</Button>
        </div>
      </S.CommentControls>
    </S.CommentContainer>
  );
}

export default Comment;
