import React from 'react';
import { IComments } from '../types/interfaces';

const Comments = ({ comments }: IComments): JSX.Element => {
  return (
    <section>
      <ul>
        {/*comments.map(comment => <Comment data={comment}/>)*/}
      </ul>
    </section>
  );
}

export default Comments;
