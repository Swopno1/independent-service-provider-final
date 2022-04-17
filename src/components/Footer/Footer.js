import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const quickLinks = [
  { id: 1, name: 'Contact', href: '/contact' },
  { id: 2, name: 'Privacy', href: '/privacy' },
  { id: 3, name: 'Terms', href: '/terms' },
  { id: 4, name: 'About', href: '/about' },
];

const Footer = () => {
  return (
    <footer className='absolute w-full bottom-0 bg-orange-400'>
      <div className='footer container mx-auto flex justify-between items-center h-36'>
        <p className='copyright-text w-1/3'>
          &copy; {new Date().getFullYear()} TravelGeeksBd All Right Reserved
        </p>

        <div className='quick-link w-1/3 flex justify-end text-center text-white'>
          <ul className='flex justify-center text-white'>
            {quickLinks.map((item) => (
              <li className='py-1 px-4' key={item.id}>
                <Link to={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='copyright-text text-right flex justify-end w-1/3'>
          <a
            className='pl-3 text-2xl'
            href='https://www.facebook.com/groups/tgeeksbd'
            target='_blank'
            rel='noreferrer'
          >
            <FaFacebook />
          </a>
          <a className='pl-3 text-2xl' href='/'>
            <FaInstagram />
          </a>
          <a className='pl-3 text-2xl' href='/'>
            <FaInstagram />
          </a>
          <a className='pl-3 text-2xl' href='/'>
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
