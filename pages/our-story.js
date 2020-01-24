import React from 'react';

import PhotoBlock from '../components/photoBlock';
import ProtectedPage from '../components/protectedPage';
import OurStoryContent from '../components/ourStoryContent';

const Registry = ({ isLoggedIn }) => {
  return (
      <ProtectedPage isLoggedIn={isLoggedIn}>
        <PhotoBlock
            backgroundImage="/static/ring_finger_bg.png"
            height="500px"
            textColor="#000000"
            mobilePosition="30% 0"
        >
          <h3>
            Our
            <br />
            Story
          </h3>
        </PhotoBlock>
        <OurStoryContent />
        <style jsx>{`
        h3 {
          text-align: left;
          font-family: bodoni-urw, serif;
          font-weight: 400;
          font-style: normal;
          color #ffffff;
          font-size: 72px;
          line-height: 50px;
          padding: 270px 0 0;
          text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.8);
        }
      `}</style>
      </ProtectedPage>
  );
};

export default Registry;
