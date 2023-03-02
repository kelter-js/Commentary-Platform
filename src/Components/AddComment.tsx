import React, { useEffect, useState } from 'react';
import { TextField, Alert, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import LoadingButton from '@mui/lab/LoadingButton';
import { changeCallbackType, avatarSchemaType } from '../types/types';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';



const schema = yup.object().shape({
  email: yup.string().email().required(),
  comment: yup.string().required(),
  author: yup.string().required(),
  avatar: yup
    .mixed()
    .test("file", "You need to provide a file", (value) => {
      const incomeFile = value as avatarSchemaType;
      return (incomeFile?.length > 0);
    }),
}).required();

const AddComment = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const [avatar, setAvatar] = useState();
  const [author, setAuthor] = useState();
  const [comment, setComment] = useState();
  const [email, setEmail] = useState();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    const callbacks: changeCallbackType = {
      'avatar': setAvatar,
      'author': setAuthor,
      'comment': setComment,
      'email': setEmail,
    }

    callbacks[name](value);
  }

  /*console.log(avatar)
  console.log(author)
  console.log(comment)
  console.log(email)*/

  return (
    <section>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <TextField
          {...register('email', { onChange: onChangeHandler })}
          label='Email'
          type='email'
          id='email'
          placeholder='Type your email'
        />
        <ErrorMessage errors={errors} name='email' />

        <TextField
          {...register('author', { onChange: onChangeHandler })}
          label='Name'
          type='text'
          id='author'
          placeholder='Type your name'
        />
        <ErrorMessage errors={errors} name='author' />

        <TextField
          {...register('comment', { onChange: onChangeHandler })}
          label='Comment text'
          type='text'
          id='comment'
          multiline
          rows={2}
          placeholder='Share your opinion'
        />
        <ErrorMessage errors={errors} name='comment' />

        <input
          {...register('avatar', { onChange: onChangeHandler })}
          accept="image/*"
          style={{ display: 'none' }}
          id="avatar"
          multiple
          type="file"
        />
        <label htmlFor="avatar">
          <DriveFolderUploadIcon />
          Upload
        </label>
        <ErrorMessage errors={errors} name='avatar' />

        <LoadingButton
          variant='contained'
          type='submit'
        >
          Log in
        </LoadingButton>
      </form>
    </section>
  );
}

export default AddComment;
