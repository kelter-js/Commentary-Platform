import React from 'react';
import Comment from './Comment/Comment';
import { IComments } from '../types/interfaces';

const Comments = ({ comments }: IComments): JSX.Element => {
  return (
    <section>
      <ul>
        {/*comments.map(comment => <Comment data={comment} key={comment.id}/>)*/}
      </ul>
    </section>
  );
}

export default Comments;
