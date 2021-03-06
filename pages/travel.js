import React from 'react';

import PhotoBlock from '../components/photoBlock';
import TravelContent from '../components/travelContent';
import ProtectedPage from '../components/protectedPage';

const Travel = ({ isLoggedIn }) => {
  return (
    <ProtectedPage isLoggedIn={isLoggedIn}>
      <PhotoBlock
        backgroundImage="/static/rock_bg.png"
        height="500px"
        textColor="#000000"
      >
        <h3>Travel</h3>
      </PhotoBlock>
      <TravelContent />
      <style jsx>{`
        h3 {
          text-align: left;
          font-family: bodoni-urw, serif;
          font-weight: 400;
          font-style: normal;
          color #ffffff;
          font-size: 72px;
          line-height: 50px;
          padding: 320px 0 0;
          text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </ProtectedPage>
  );
};

export default Travel;
