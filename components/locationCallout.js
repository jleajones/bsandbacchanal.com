import React from 'react';
import ReactSVG from 'react-svg';

import language from '../constants/language';

const LocationCallout = ({ color }) => (
  <div>
    <ReactSVG
      src="/static/flight.svg"
      beforeInjection={svg => {
        svg.setAttribute('style', `width: 150px; height: auto; fill: ${color};`);
      }}
    />
    <h2>
      {language.destinationDetail()}{' '}
      <span>{language.destinationGeneral()}</span>
    </h2>
    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
        text-align: center;
      }

      h2 {
        text-align: center;
        text-transform: uppercase;
        font-family: skolar-sans-latin, sans-serif;
        font-size: 32px;
        line-height: 32px;
        color: ${color};
      }

      h2 > span {
        display: block;
        font-weight: 100;
        font-style: normal;
        font-size: 18px;
        line-height: 24px;
      }
    `}</style>
  </div>
);

export default LocationCallout;
