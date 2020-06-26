import React from 'react';
import ReactSVG from 'react-svg';

const Logo = ({ fixed, onMenuClick }) => {
  const onClick = () => {
    const body = document.querySelector('body');
    const html = document.querySelector('html');
    body.style.overflow = 'hidden';
    html.style.overflow = 'hidden';
    onMenuClick(true);
  };

  return (
    <div className="root">
      <h1 className="logo">Britni &amp; Samuel</h1>

      <span className="menu-icon">
        <ReactSVG
          src={`/static/menu.svg`}
          beforeInjection={svg => {
            svg.setAttribute('style', 'width: 24px; height: auto;');
          }}
          onClick={onClick}
        />
      </span>
      <style jsx>{`
        .root {
          position: relative;
        }

        .menu-icon {
          display: none;
        }

        .logo {
          color: #fff;
          font-family: bickham-script-pro-3, serif;
          font-weight: 100;
          font-style: normal;
          font-size: 70px;
          line-height: ${fixed ? '40px' : '70px'};
          margin: ${fixed ? '20px 0 0' : '20px 0 0'};
          transition: all 0.5s ease;
        }

        @media (max-width: 768px) {
          .logo {
            font-size: ${fixed ? '36px' : '55px'};
            line-height: ${fixed ? '36px' : '55px'};
            margin-bottom: ${fixed ? '8px' : '20px'};
            transition: all 0.5s ease;
          }

          .menu-icon {
            display: block;
            margin-top: ${fixed ? '0' : '10px'};
            position: absolute;
            top: 0;
            right: 20px;
            cursor: pointer;
            transition: all 0.5s ease;
          }
        }

        @media (max-width: 320px) {
          .logo {
            font-size: 40px;
            line-height: 40px;
            margin-top: ${fixed ? '0' : '20px'};
            margin-bottom: ${fixed ? '0' : '20px'};
          }

          .menu-icon {
            margin-top: 7px;
            transition: all 0.5s ease;
          }
        }
      `}</style>
    </div>
  );
};

export default Logo;
