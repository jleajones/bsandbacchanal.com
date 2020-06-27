import React from 'react';
import Link from 'next/link';

import linkItems from '../constants/links';

const links = linkItems.map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = ({ showDialog, isLoggedIn }) => {
  const onClick = e => {
    if (!isLoggedIn) {
      e.stopPropagation();
      e.preventDefault();
      const body = document.querySelector('body');
      const html = document.querySelector('html');
      const forwardToUrl = e.target.href;
      body.style.overflow = 'hidden';
      html.style.overflow = 'hidden';
      showDialog({ showDialog: true, forwardToUrl });
    }
  };

  return (
    <nav>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        nav {
          text-align: center;
          position: relative;
          z-index: 9;
        }
        ul {
          margin: 0 0 10px;
          display: flex;
          justify-content: center;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
          cursor: pointer;
        }
        a {
          color: #cccccc;
          text-decoration: none;
          font-size: 13px;
          text-transform: uppercase;
          font-family: skolar-sans-latin, sans-serif;
          font-weight: 100;
          font-style: normal;
          transition: color 0.3s ease-out;
        }

        a:hover {
          color: black;
        }

        @media (max-width: 768px) {
          nav {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
