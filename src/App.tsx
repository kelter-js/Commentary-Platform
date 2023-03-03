import React, { useState } from 'react';
import MainContainer from './Components/Main';
import VisuallyHidden from './Common/VisuallyHidden';
import AddComment from './Components/AddComment/AddComment';
import { IComment } from './types/interfaces';
import Comments from './Components/Comments';

const App = () => {
  const [commentsList, setComments] = useState<IComment[] | []>([]);

  const addComment = (data: IComment) => {
    setComments((comments) => [...comments, data]);
  }

  console.log(commentsList)

  return (
    <MainContainer>
      <VisuallyHidden tag='h1'>Platform to share your opinion with others</VisuallyHidden>
      <AddComment onAddComment={addComment} />
      <Comments comments={commentsList} />
    </MainContainer>
  );
}

export default App;
