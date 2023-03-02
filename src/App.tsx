import React, { useState } from 'react';
import MainContainer from './Components/Main';
import VisuallyHidden from './Common/VisuallyHidden';
import AddComment from './Components/AddComment/AddComment';
import Comments from './Components/Comments';

const App = () => {
  const [commentsList, setComments] = useState([]);

  return (
    <MainContainer>
      <VisuallyHidden tag='h1'>Platform to share your opinion with others</VisuallyHidden>
      <AddComment onAddComment={setComments} />
      {/*<Comments comments={commentsList}/> */}
    </MainContainer>
  );
}

export default App;
