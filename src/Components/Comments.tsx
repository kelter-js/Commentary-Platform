import React from 'react';
import Comment from './Comment/Comment';
import { IComments } from '../types/interfaces';
import VisuallyHidden from '../Common/VisuallyHidden';

const Comments = ({ comments }: IComments): JSX.Element => {
  return (
    <section>
      <VisuallyHidden tag='h2'>List of comments</VisuallyHidden>
      <ul>
        {/*comments.map(comment => <Comment data={comment} key={comment.id}/>)*/}
      </ul>
    </section>
  );
}

export default Comments;
