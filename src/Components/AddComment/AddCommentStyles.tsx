import React from 'react';
import styled from 'styled-components';

export const AddCommentContainer = styled.section`
  border: 1px solid black;
  margin: 15px;
  padding: 5px;
  box-sizing: border-box;
`;

export const CommentForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const CommentInputContainer = styled.div`
  width: 70%;

  & .MuiTextField-root {
    width: 100%;
  }

  @media (max-width: 1300px)  {
    width: 60%;
  }
`;

export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;

  & .MuiTextField-root {
    margin-bottom: 10px;
  }

  & .MuiTextField-root:last-of-type {
    margin-bottom: 0;
  }
`;

export const FormControllersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 14%;

  @media (max-width: 1300px)  {
    width: 16%;
  }
`;

export const UploadAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  min-height: 150px;
  padding-bottom: 10px;
  box-sizing: border-box;
  width: 100%;

  & label {
    width: 100%;
  }

  & span {
    margin-left: auto;
  }

  & img {
    border-radius: 50%;
  }
`;