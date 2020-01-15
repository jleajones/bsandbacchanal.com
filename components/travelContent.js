import React from 'react';

// import language from '../constants/language';

const OurStoryContent = () => (
  <section>
    <div className="container">
      <div className="item">
        <h2>Trinidad & Tobago</h2>
        <div className="content">
        <p>
          A nation comprised of two islands ~50 miles away from each other by
          air. Due to the size of the respective islands, international flights
          only fly into Port of Spain, Trinidad so an additional short flight
          will need to be taken from Port of Spain (POS) to Robinson
          International Airport (TAB) in Tobago since the wedding, reception and
          surrounding activities will take place in Tobago.
        </p>
        </div>
        <div className="content">
        <p>The following airlines fly from the US to Piarco International Airport (POS). Port of Spain,
          Trinidad &amp; Tobago.</p>
        <ul>
          <li>United Airlines</li>
          <li>American Airlines</li>
          <li>Caribbean Airlines</li>
          <li>JetBlue</li>
        </ul>
        </div>
        <div className="content">
        <p><b><em>Please note that all wedding festivities will take place in Tobago which is a separate island
          15min from Piarco Airport via plane. Flights leave approximately every hour.</em></b></p>
        <p>Caribbean Airlines | Piarco International Airport (POS) &rarr; A.N.R Robinson International
          Airport (TAB)</p>
        </div>

        <div className="content">
          <p>*** Flights between POS and TAB sell out well in advance during the summer months given the
            number of Trinidadians that travel daily to Tobago. <b>Please book this portion of your itinerary
              ASAP but no later than the month of February to ensure no complications.</b>  Round trip is ~$75
            USD and tickets can be modified up until the day of travel subject to availability for minimal
            charge. ***</p>
        </div>
      </div>
    </div>
    <style jsx>{`
      section {
        padding: 120px 0 60px;
        display: flex;
        flex-direction: column;
      }

      h2 {
        text-align: center;
        font-family: bickham-script-pro-3, serif;
        font-weight: 100;
        font-size: 90px;
        line-height: 60px;
        margin: 0;
        color: #e3c5c3;
      }

      .subText {
        margin: 0 0 30px;
      }
      
      .content {
        margin-bottom: 80px;
      }

      p {
        margin: 30px 0 0;
        color: #c6c6c6;
        line-height: 32px;
      }

      p a {
        color: #e3c5c3;
      }

      p a:hover {
        color: #000;
      }

      .container {
        max-width: 1280;
        display: flex;
        justify-content: center;
      }

      .container > .item {
        max-width: 660px;
        margin: 0 auto;
        text-align: center;
      }

      @media (max-width: 768px) {
        .container {
          padding: 0 20px;
        }
      }

      @media (max-width: 320px) {
        .container {
          padding: 0 20px;
        }
      }

      .list {
        display: flex;
        justify-content: center;
      }
        
      ul {
        width: 75%;
        text-align: left;
        margin: 0;
      }

      @media (max-width: 768px) {
        ul {
          width: 100%;
        }
      }

      @media (max-width: 320px) {
        ul {
          width: 100%;
        }
      }
      
      li {
        margin-bottom: 12px;
        color: #c6c6c6;
        font-size: 13px;
      }
    `}</style>
  </section>
);

export default OurStoryContent;
