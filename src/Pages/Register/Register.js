import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4'>
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
        <form className='mt-8 space-y-6'>
          <div className='rounded-md shadow-md -space-y-px'>
            <div>
              <label htmlFor='user-name' className='sr-only'>
                Email address
              </label>
              <input
                id='user-name'
                name='name'
                type='text'
                autoComplete='user'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Full Name'
              />
            </div>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
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
          <div className='flex item-center justify-between'>
            <div className='text-sm'>
              <Link
                to='/signin'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Already have an account?
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
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;