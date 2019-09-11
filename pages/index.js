import React from 'react';

import AccentBlock from '../components/accentBlock';
import DateCallout from '../components/dateCallout';
import Hero from '../components/hero';
import LocationCallout from '../components/locationCallout';
import PhotoBlock from '../components/photoBlock';
import Welcome from '../components/welcome';

const components = [<LocationCallout />, <DateCallout />];

const Home = () => {
  return (
    <>
      <Hero />
      <AccentBlock
        backgroundColor="#e3c5c3"
        textColor="#000000"
        components={components}
      />
      <PhotoBlock
        backgroundImage="/static/bs_hero2.png"
        height="649px"
        textColor="#000000"
      >
        <h3>
          You
          <br />
          ready?
        </h3>
      </PhotoBlock>
      <Welcome />

      <style jsx>{`
          h3 {
            text-align: left;
            font-family: bodoni-urw, serif;
            font-weight: 400;
            font-style: normal;
            color #ffffff;
            font-size: 72px;
            line-height: 50px;
            padding: 390px 0 0;
            text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.8);
          }
      `}</style>
    </>
  );
};

export default Home;
