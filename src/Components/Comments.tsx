import React from 'react';
import Comment from './Comment/Comment';
import { IComments } from '../types/interfaces';
import VisuallyHidden from '../Common/VisuallyHidden';
import styled from 'styled-components';

const CommentsList = styled.ul`
  max-height: 405px;
  margin: 0 15px;
  padding: 0;
  list-style: none;
  border: 1px solid black;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #b4b7bd;
    border-radius: 20px;
  }
`;

const Comments = ({ comments }: IComments): JSX.Element => {
  return (
    <section>
      <VisuallyHidden tag='h2'>List of comments</VisuallyHidden>
      <CommentsList>
        {comments.map(comment => <Comment data={comment} key={comment.id} />)}
      </CommentsList>
    </section>
  );
}

export default Comments;
