import React from 'react';

// import language from '../constants/language';

const AccommodationsContent = () => (
  <section>
    <div className="container">
      <div className="item">
        <h2>Where to stay...</h2>

        <div className="option">
        <h5>The Villas at Stonehaven</h5>
          <p>We have reserved 12 villas at The Villas at Stonehaven. If interested in staying in a villa please
          reach out us at eventsbytricia@hotmail.com and we will provide additional information on availability and pricing.</p>
        </div>

        <div className="option">
        <h5>Bacolet Beach Club</h5>
          <p>We have reserved a block of rooms at the Bacolet Beach Club for guests of the wedding. See
          below for rates assuming a 4-night stay from June 4 th – June 8 th , 2002. For more information or to
            make a reservation please send an email to <a href="mailto:reservations@bacoletbeachclub.com">Renee at reservations@bacoletbeachclub.com</a> or a
          WhatsApp message to +1 (868) 463 4604. In your email / message please reference the “Jackson
            Wedding” and include the following details:</p>
        <p><b>Number of guests</b><br />
          <b>Dates of proposed stay</b><br />
          <b>Contact details (telephone # / email)</b><br /></p>
        <p><b>Total for 4-nights is $560 per couple / room inclusive of hotel tax</b></p>
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
      
      .option {
        margin: 80px 0 150px;
      }
      
      .option h5 {
          font-family: bodoni-urw, serif;
          font-weight: 400;
          font-style: normal;
          font-size: 48px;
          margin: 0;
          color: #c6c6c6;
          line-height: 5px;
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
    `}</style>
  </section>
);

export default AccommodationsContent;
