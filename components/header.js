import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import language from '../constants/language';
import Nav from './nav';
import Logo from './logo';

const Header = ({ onMenuClick, showDialog, isLoggedIn }) => {
  const [headerClassname, setHeaderClassName] = useState('');
  // useEffect(() => {
  //   window.addEventListener('scroll', e => {
  //     if (window.pageYOffset > 100) {
  //       setHeaderClassName('fixed');
  //     } else {
  //       setHeaderClassName('');
  //     }
  //   });
  // }, []);

  return (
    <header className={headerClassname}>
      <div className="accentBar">
        <div className="container">
        </div>
      </div>
      <Nav showDialog={showDialog} isLoggedIn={isLoggedIn} />

      <style jsx>{`
        header {
          min-width: 320px;
          width: 100%;
          top: 0;
          z-index: 99999;
        }

        .fixed {
          box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.35);
        }


        .accentBar a {
          color: #666666;
          text-decoration: none;
        }

        .accentBar a:hover {
          text-decoration: underline;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
        }

        @media (max-width: 1280px) {
          .accentBar {
            padding: 8px 20px;
          }
        }

        @media (max-width: 768px) {
          .accentBar {
            font-size: 10px;
            padding: 8px 20px;
          }
        }

        @media (max-width: 328px) {
          .accentBar {
            font-size: 9px;
            padding: 8px 20px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
