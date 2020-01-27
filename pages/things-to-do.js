import React from 'react';

import PhotoBlock from '../components/photoBlock';
import ComingSoon from '../components/comingSoon';
import ProtectedPage from '../components/protectedPage';
import language from '../constants/language';

const ThingToDo = ({ isLoggedIn }) => {
  return (
    <ProtectedPage isLoggedIn={isLoggedIn}>
      <PhotoBlock
        backgroundImage="/static/bs_hero2.png"
        height="500px"
        textColor="#000000"
        mobilePosition="10% 0"
      >
        <h3>
          Things
          <br />
          To Do
        </h3>
      </PhotoBlock>
      <ComingSoon message={language.comingSoonThingsToDo()} />
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

export default ThingToDo;
