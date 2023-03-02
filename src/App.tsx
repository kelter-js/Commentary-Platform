import React, { useState } from 'react';
import MainContainer from './Components/Main';
import VisuallyHidden from './Common/VisuallyHidden';
import AddComment from './Components/AddComment/AddComment';

const App = () => {
  const [comments, setComments] = useState([]);

  return (
    <MainContainer>
      <VisuallyHidden>Platform to share your opinion with others</VisuallyHidden>
      <AddComment onAddComment={setComments} />
    </MainContainer>
  );
}

export default App;
