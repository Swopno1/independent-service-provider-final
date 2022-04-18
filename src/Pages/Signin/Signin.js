import { LockClosedIcon } from '@heroicons/react/solid';
import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../components/Loading/Loading';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Signin = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const navigate = useNavigate();
  const location = useLocation('');

  let from = location.state?.from?.pathname || '/';
  let message = '';

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (error) {
    message = <p className='text-danger'>Error: {error?.message}</p>;
  }
  if (loading) {
    message = <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  const handleSignIn = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.valur;

    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (e) => {
    navigate('/register');
  };

  return (
    <div>
      <div className='min-h-full flex items-center justify-center pt-12 pb-8 px-4'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <h1 className='text-center text-orange-500 text-5xl font-extrabold'>
              <Link to='/'>
                TravelGeeks<span className='text-black'>BD</span>
              </Link>
            </h1>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Please Register
            </h2>
          </div>
          {message}
          <form className='mt-8 space-y-6' onSubmit={handleSignIn}>
            <div className='rounded-md shadow-md -space-y-px'>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  ref={emailRef}
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Email address'
                />
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  ref={passwordRef}
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Password'
                />
              </div>
            </div>
            <div className=''>
              <div className='text-sm mb-3'>
                New to TravelGeeksBD?{' '}
                <Link
                  to='/register'
                  onClick={navigateRegister}
                  className='font-medium text-indigo-600 hover:text-indigo-500'
                >
                  Please Register now
                </Link>
              </div>
              <div className='text-sm'>
                <Link
                  to='/signin'
                  className='font-medium text-indigo-600 hover:text-indigo-500'
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                  <LockClosedIcon
                    className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                    aria-hidden='true'
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Signin;
