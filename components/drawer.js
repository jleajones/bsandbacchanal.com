import React from 'react'
import ReactSVG from "react-svg";
import Link from "next/link";

import linkItems from '../constants/links'

const links = linkItems.map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link
});

const Drawer = ({ onMenuClick, showDialog, isLoggedIn }) => {
  const body = document.querySelector('body');
  const html = document.querySelector('html');
  let root;

  const onClose = () => {
    root = document.getElementById('drawer-root');
    body.style.overflow = "auto";
    html.style.overflow = "auto";

    root.classList.remove('open');
    root.classList.add('close');
    setTimeout(() => {
      onMenuClick(false);
    }, 150)
  };

  const onLinkClick = e => {
    onClose();
    if (!isLoggedIn) {
      const forwardToUrl = e.target.href;
      e.stopPropagation();
      e.preventDefault();
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
      showDialog({ showDialog: true, forwardToUrl });
    }
  };

  return (
      <section id='drawer-root' className='open'>
        <div className='drawer'>
          <div className='container'>
            <ReactSVG
                src='/static/menu-open.svg'
                beforeInjection={svg => {
                  svg.setAttribute('style', 'width: 24px; height: auto;');
                }}
                onClick={onClose}
            />
            <nav>
              <ul>
                {links.map(({ key, href, label }) => (
                    <li key={key}>
                      <Link href={href}>
                        <a onClick={label === 'home' ? () => {} : onLinkClick}>{label}</a>
                      </Link>
                    </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className='overlay' onClick={onClose}/>

        <style jsx>{`
          section {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height 100%;
            z-index: 999999;
          }
          
          ul {
            margin: 0 0 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          
          li {
            display: flex;
            padding: 6px 8px;
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
          
          .drawer {
            height: 100%;
            width: 80%;
            background: #ffffff;
            position: absolute;
            z-index: 9;
            box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.85);
          }
          
          .container {
            margin: 10px;
          }
          
          .open .drawer {
            animation: 0.2s ease 0s slideIn forwards;
          }
          
          
          .close .drawer {
            animation: 0.4s ease 0s slideOut forwards;
          }
          
          @keyframes slideIn {
            from { right: -70%; }
            to {
              right: 70%;
              transform: translateX(100%);
            }
          }
          
          @keyframes slideOut {
            from { right: -10px; }
            to {
              right: -70%;
              transform: translateX(100%);
            }
          }
          
          .overlay {
            background-color: rgba(0, 0, 0, 0.35);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height 100%;
          }
        `}</style>
      </section>
  );
};

export default Drawer;
