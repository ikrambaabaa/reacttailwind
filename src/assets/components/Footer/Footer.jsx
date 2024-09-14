import React from 'react';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='py-10 bg-slate-200 text-gray-800'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 md:gap-8'>
          
          {/* First section */}
          <div className='space-y-4 max-w-[300px]'>
            <h1 className='text-2xl font-bold'>THE CODING JOURNEY</h1>
            <p className='text-gray-600'>
              This is a platform where you can learn coding and development. Our courses are designed to help you start your journey into the tech world.
            </p>
          </div>
          
          {/* Second section */}
          <div className='space-y-4'>
            <h1 className='text-2xl font-bold'>COURSES</h1>
            <ul className='space-y-2 text-lg'>
              <li className='cursor-pointer hover:text-yellow-500 transition duration-200'>WEB DEVELOPMENT</li>
              <li className='cursor-pointer hover:text-yellow-500 transition duration-200'>SOFTWARE DEVELOPMENT</li>
              <li className='cursor-pointer hover:text-yellow-500 transition duration-200'>APP DEVELOPMENT</li>
              <li className='cursor-pointer hover:text-yellow-500 transition duration-200'>ELEARNING</li>
            </ul>
          </div>
          
          {/* Third section */}
          <div className='space-y-4'>
            <h1 className='text-2xl font-bold'>LINKS</h1>
            <ul className='space-y-2 text-lg'>
              <li className='cursor-pointer hover:text-yellow-500 transition duration-200'>ABOUT US</li>
              <li className='cursor-pointer hover:text-yellow-500 transition duration-200'>CONTACT</li>
              <li className='cursor-pointer hover:text-yellow-500 transition duration-200'>BLOG</li>
              <li className='cursor-pointer hover:text-yellow-500 transition duration-200'>SUPPORT</li>
            </ul>
          </div>
          
          {/* Fourth section */}
          <div className='space-y-4'>
            <h1 className='text-2xl font-bold'>SOCIAL MEDIA</h1>
            <div className='flex flex-col space-y-2'>
              <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='flex items-center space-x-2 cursor-pointer hover:text-yellow-500 transition duration-200'>
                <FaFacebookF className='text-xl' />
                <span>Facebook</span>
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='flex items-center space-x-2 cursor-pointer hover:text-yellow-500 transition duration-200'>
                <FaTwitter className='text-xl' />
                <span>Twitter</span>
              </a>
              <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='flex items-center space-x-2 cursor-pointer hover:text-yellow-500 transition duration-200'>
                <FaInstagram className='text-xl' />
                <span>Instagram</span>
              </a>
              <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer' className='flex items-center space-x-2 cursor-pointer hover:text-yellow-500 transition duration-200'>
                <FaLinkedinIn className='text-xl' />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>
        
        {/* Footer bottom */}
        <div className='mt-10 border-t border-gray-300 pt-6 text-center text-gray-600'>
          <p>&copy; 2024 The Coding Journey. All Rights Reserved.</p>
          <p className='text-sm'>Made with ♥ by ikram Baabaa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
