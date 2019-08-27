import React, { useEffect, useState } from 'react'

import Link from "next/link";
import Nav from "./nav";
import Logo from "./logo";

const Header = ({ onMenuClick, showDialog }) => {
  const [headerClassname, setHeaderClassName] = useState('');
  useEffect( () => {
    window.addEventListener('scroll', (e) => {
      if(window.pageYOffset > 100) {
        setHeaderClassName('fixed');
      } else {
        setHeaderClassName('');
      }
    })
  }, []);

    return (
      <header className={headerClassname}>
        <div className='accentBar'>
          <div className='container'>
            <span>06.06.20 <strong>Trinidad and Tobago</strong>, West Indies</span>
            <span><Link href="#"><a>#bsandbacchanal</a></Link></span>
          </div>
        </div>
        <Logo fixed={headerClassname === 'fixed'} onMenuClick={onMenuClick}/>
        <Nav showDialog={showDialog} />

        <style jsx>{`
          header {
            border-bottom: solid 1px #666666;
            position: fixed;
            min-width: 320px;
            width: 100%;
            background: #fff;
            top: 0;
            z-index: 99999;
          }
          
          .fixed {
            box-shadow: 1px 2px  3px rgba(0, 0, 0, 0.35);
          }
          
          .accentBar {
            background-color: #e3c5c3;
            font-family: skolar-sans-latin, sans-serif;
            font-weight: 100;
            font-style: normal;
            padding: 8px 0;
            color: #666666;
            font-size: 12px;
            line-height: 12px;
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