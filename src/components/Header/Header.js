import React from 'react';
import Nav from '../Nav/Nav';

const Header = () => {
  return (
    <header className='w-full bg-slate-800'>
      <h1 className='container mx-auto text-white'>Travel Geeks BD</h1>
      <Nav></Nav>
    </header>
  );
};

export default Header;
