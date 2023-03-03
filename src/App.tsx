import React, { useState } from 'react';
import MainContainer from './Common/Main';
import VisuallyHidden from './Common/VisuallyHidden';
import AddComment from './Components/AddComment/AddComment';
import { IComment } from './types/interfaces';
import Comments from './Components/Comments';

/**
 * @return  {JSX.Element} return page markup, commentary creation form and list of comments
*/
const App = () => {
  const [commentsList, setComments] = useState<IComment[] | []>([]);

  const addComment = (data: IComment) => {
    setComments((comments) => [...comments, data]);
  }

  return (
    <MainContainer>
      <VisuallyHidden tag='h1'>Platform to share your opinion with others</VisuallyHidden>
      <AddComment onAddComment={addComment} />
      <Comments comments={commentsList} />
    </MainContainer>
  );
}

export default App;
