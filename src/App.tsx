import React from 'react';
import MainContainer from './Components/Main';
import VisuallyHidden from './Common/VisuallyHidden';
import AddComment from './Components/AddComment';

const App = () => {
  return (
    <MainContainer>
      <VisuallyHidden>Platform to share your opinion with others</VisuallyHidden>
      <AddComment />
    </MainContainer>
  );
}

export default App;
