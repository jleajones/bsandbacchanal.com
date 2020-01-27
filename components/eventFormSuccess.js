import React, { useState } from 'react';
import ReactSVG from 'react-svg';

const EventFormSuccess = () => {
  const [isVisible, setIsVisible] = useState(true);
  setTimeout(() => {
    setIsVisible(false);
  }, 1000);
  return (
    <div className={`success ${!isVisible ? 'success-end' : ''}`}>
      <ReactSVG
        src="/static/check.svg"
        beforeInjection={svg => {
          svg.setAttribute('style', `width: 30px; height: auto; fill: #fff;`);
        }}
      />{' '}
      <p>Thank you for your reservation. We look forward to seeing you!</p>
      <style jsx>{`
        .success {
          display: flex;
          border: solid 1px #6bbf34;
          border-radius: 8px;
          padding: 4px 16px;
          font-size: 14px;
          align-items: center;
          background-color: #6bbf34;
          opacity: 1;
          transition: opacity 2s;
        }

        .success-end {
          opacity: 0;
        }

        .success p {
          margin-left: 12px;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default EventFormSuccess;
