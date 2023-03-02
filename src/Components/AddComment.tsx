import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import { changeCallbackType, avatarSchemaType } from '../types/types';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { IAddComment } from '../types/interfaces';
import styled from 'styled-components';
import logo from '../assets/userpic.png';

const AddCommentContainer = styled.section`
  border: 1px solid black;
  margin: 15px;
  padding: 5px;
`;

const CommentForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const CommentInputContainer = styled.div`
  width: 70%;

  & .MuiTextField-root {
    width: 100%;
  }
`;

const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;

  & .MuiTextField-root {
    margin-bottom: 10px;
  }

  & .MuiTextField-root:last-of-type {
    margin-bottom: 0;
  }
`;

const FormControllersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 14%;
`;

const UploadAvatarContainer = styled.div`
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

const USER_DATA_MAX_LENGTH = 150;
const USER_COMMENT_MAX_LENGTH = 3000;

const schema = yup.object().shape({
  email: yup.string().max(USER_DATA_MAX_LENGTH).email().required(),
  comment: yup.string().max(USER_COMMENT_MAX_LENGTH).required(),
  author: yup.string().max(USER_DATA_MAX_LENGTH).required(),
  avatar: yup
    .mixed()
    .test('file', 'You need to provide a file', (value) => {
      const incomeFile = value as avatarSchemaType;
      return (incomeFile?.length > 0);
    }),
}).required();

const AddComment = ({ onAddComment }: IAddComment): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const [selectedFile, setSelectedFile] = useState();
  const [avatarView, setAvatarView] = useState('');
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setAvatarView(objectUrl);


      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [selectedFile]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    const file = e.target.files && e.target.files[0];

    const callbacks: changeCallbackType = {
      'avatar': setSelectedFile,
      'author': setAuthor,
      'comment': setComment,
      'email': setEmail,
    }

    callbacks[name](file ?? value);
  }

  return (
    <AddCommentContainer>
      <CommentForm
        onSubmit={handleSubmit((data) => {
          console.log(data);
          //onAddComment(data);
        })}
      >
        <UserDataContainer>
          <TextField
            {...register('email', { onChange: onChangeHandler })}
            value={email}
            helperText={`${email.length} / ${USER_DATA_MAX_LENGTH}`}
            label='Email'
            type='email'
            id='email'
            inputProps={{ maxLength: USER_DATA_MAX_LENGTH }}
            placeholder='Type your email'
          />
          <ErrorMessage errors={errors} name='email' />

          <TextField
            {...register('author', { onChange: onChangeHandler })}
            value={author}
            helperText={`${author.length} / ${USER_DATA_MAX_LENGTH}`}
            label='Name'
            type='text'
            id='author'
            inputProps={{ maxLength: USER_DATA_MAX_LENGTH }}
            placeholder='Type your name'
          />
          <ErrorMessage errors={errors} name='author' />
        </UserDataContainer>

        <CommentInputContainer>
          <TextField
            {...register('comment', { onChange: onChangeHandler })}
            value={comment}
            helperText={`${comment.length} / ${USER_COMMENT_MAX_LENGTH}`}
            label='Comment text'
            type='text'
            id='comment'
            multiline
            rows={4.9}
            inputProps={{ maxLength: USER_COMMENT_MAX_LENGTH }}
            placeholder='Share your opinion'
          />
          <ErrorMessage errors={errors} name='comment' />
        </CommentInputContainer>


        <FormControllersContainer>
          <UploadAvatarContainer>
            <Button
              variant='contained'
              component='label'
            >
              <DriveFolderUploadIcon />
              <span>Upload File</span>
              <input
                {...register('avatar', { onChange: onChangeHandler })}
                accept='image/*'
                hidden
                id='avatar'
                multiple
                type='file'
              />
            </Button>

            <img alt='' src={avatarView || logo} width={115} height={92} />

            <ErrorMessage errors={errors} name='avatar' />
          </UploadAvatarContainer>

          <LoadingButton
            variant='contained'
            type='submit'
          >
            Add comment
          </LoadingButton>
        </FormControllersContainer>
      </CommentForm>
    </AddCommentContainer>
  );
}

export default AddComment;
