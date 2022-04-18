import React from 'react';
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();

  let errorElement = '';

  if (error || error1) {
    errorElement = (
      <p className='text-danger'>
        Error: {error?.message} {error1?.message}
      </p>
    );
  }

  if (loading || loading1) {
    errorElement = <Loading></Loading>;
  }

  if (user || user1) {
    navigate('/home');
  }

  return (
    <div>
      <div className='flex justify-center items-center'>
        <div style={{ height: '1px' }} className='bg- bg-orange-600'></div>
        <p className='mt-2 px-2'>or</p>
        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
      </div>
      <div>
        {errorElement}
        <button
          onClick={() => signInWithGoogle()}
          className='btn btn-info w-50 mx-auto d-block  my-2'
        >
          <img
            style={{ width: '30px' }}
            src='https://i.ibb.co/17Gd0qw/google.png'
            alt=''
          />
          <span className='px-2'>Google Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className='btn btn-info w-50 mx-auto d-block my-2'
        >
          <img
            style={{ width: '30px' }}
            src='https://i.ibb.co/jZqFWxT/github.png'
            alt=''
          />
          <span className='px-2'>Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
