import React from 'react';

// import language from '../constants/language';

const OurStoryContent = () => (
  <section>
    <div className="container">
      <div className="item">
        <h2>Trinidad & Tobago</h2>
        <p>
          a nation comprised of two islands ~50 miles away from each other by
          air. Due to the size of the respective islands, international flights
          only fly into Port of Spain, Trinidad so an additional short flight
          will need to be taken from Port of Spain (POS) to Robinson
          International Airport (TAB) in Tobago since the wedding, reception and
          surrounding activities will take place in Tobago.
        </p>
        <p>
          While there are numerous airlines that fly from the US to Trinidad,{' '}
          <a href="">Caribbean Airlines</a> is the only carrier that operates
          flights between the two islands. These flights are ~25 minutes in
          length and take place very frequently, however ideal flight times sell
          out well in advance given the number of people who commute regularly
          between the islands. During the summer months this issue is
          exacerbated by the influx of both domestic and international
          vacationers.
        </p>
        <p>
          To prevent unnecessary complications, we would advise that you book
          the Trinidad (POS) to Tobago (TAB) ticket as far in advance as
          possible, even if it’s well in advance of purchasing your primary
          round-trip travel between your home city and Port of Spain. While it
          may seem counter-intuitive to purchase this trip leg in advance, we
          assure you the risk is minimal since flights are heavily subsidized by
          the government and typically cost between $45 and $75 round trip, can
          be easily changed (both date and time) and are also refundable
          entirely up to 75% of ticket value.
        </p>
        <p>
          The Following major airlines fly into Port of Spain, Trinidad & Tobago
          Airport (POS):
        </p>
        <div className="list">
          <ul>
            <li><strong>Air Canada</strong> (direct from Toronto)</li>
            <li><strong>Air Canada</strong> (direct from Miami)</li>
            <li><strong>British Airways</strong></li>
            <li>
              <strong>Caribbean Airlines</strong> (direct from NYC, Miami, and Ft. Lauderdale)
            </li>
            <li><strong>JetBlue</strong> (direct from NYC, and Ft. Lauderdale)</li>
            <li><strong>United</strong> (direct from NYC-EWR, and Houston)</li>
          </ul>
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

      p {
        margin: 30px 0;
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
