import React from 'react';
import Comment from './Comment/Comment';
import { IComments } from '../types/interfaces';
import VisuallyHidden from '../Common/VisuallyHidden';
import styled from 'styled-components';

const CommentsList = styled.ul`
  margin: 0 15px;
  padding: 0;
  list-style: none;
  border: 1px solid black;
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
