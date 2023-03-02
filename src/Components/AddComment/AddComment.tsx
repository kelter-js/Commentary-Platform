import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import { changeCallbackType, avatarSchemaType } from '../../types/types';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { IAddComment } from '../../types/interfaces';
import logo from '../assets/userpic.png';
import * as S from './AddCommentStyles';

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
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const [selectedFile, setSelectedFile] = useState<Blob | MediaSource | null>(null);
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

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    //onAddComment(data);

    reset({
      email: '',
      author: '',
      comment: '',
      avatar: '',
    });

    if (avatarView) {
      URL.revokeObjectURL(avatarView);
      setAvatarView('');
    }

    setSelectedFile(null);
    setAuthor('');
    setComment('');
    setEmail('');
  }

  return (
    <S.AddCommentContainer>
      <S.CommentForm
        onSubmit={handleSubmit(onSubmit)}
      >
        <S.UserDataContainer>
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
        </S.UserDataContainer>

        <S.CommentInputContainer>
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
        </S.CommentInputContainer>


        <S.FormControllersContainer>
          <S.UploadAvatarContainer>
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
          </S.UploadAvatarContainer>

          <LoadingButton
            variant='contained'
            type='submit'
          >
            Add comment
          </LoadingButton>
        </S.FormControllersContainer>
      </S.CommentForm>
    </S.AddCommentContainer>
  );
}

export default AddComment;
