// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div className='flex item-center justify-between gap-4 py-3 mt-20'>
//       <img src={assets.logo} alt="" />
//       <p className='flex-1 border-l border-gray-400 pl-4 pt-2 text:sm text-gray-500max-sm:hidden text-center'>Copyright @Aditya456.dev | All right reserved.</p>

//       <div className='flex gap-2.5'>
//         <img src={assets.facebook_icon} alt="" width={35} />
//         <img src={assets.twitter_icon} alt="" width={35} />
//         <img src={assets.instagram_icon} alt="" width={35} />
//       </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-6 mt-20 border-t border-gray-300">
      {/* Logo */}
      <img src={assets.logo} alt="Logo" className="w-28 sm:w-36" />

      {/* Copyright */}
      <p className="text-sm text-gray-500 text-center sm:text-left max-sm:px-2">
        © Aditya.456 | All rights reserved.
      </p>

      {/* Social Icons */}
      <div className="flex gap-3">
        <a href="https://www.linkedin.com/in/aditya-pal-969108355/" target="_blank" rel="noopener noreferrer">
          <img src={assets.linkedin_icon} alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a href="https://github.com/Addy456" target="_blank" rel="noopener noreferrer">
          <img src={assets.github_icon} alt="Github" className="w-8 h-8" />
        </a>
        <a href="https://www.instagram.com/_mr_adi_456_/" target="_blank" rel="noopener noreferrer">
          <img src={assets.instagram_icon} alt="Instagram" className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default Footer;

