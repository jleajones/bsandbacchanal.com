import React from 'react';

// import language from '../constants/language';

const AccommodationsContent = () => (
  <section>
    <div className="container">
      <div className="item">
        <h2>Accommodations</h2>

        <div className="option">
          <h5>The Villas at Stonehaven</h5>
          <p>
            To reserve a villa at{' '}
            <a href="" target="_blank" rel="noopener">
              Stonehaven Villas please visit their website
            </a>
            .
          </p>
          <p className="alert-message">
            If you need to change your previous reservation please reference The
            Jackson wedding and share that this change is needed due to the
            global COVID19 pandemic.
          </p>
        </div>

        <div className="option">
          <h5>Bacolet Beach Club</h5>
          <p>
            We have reserved a block of rooms at the Bacolet Beach Club for
            guests of the wedding. For more information or to make a reservation
            please send an email to{' '}
            <a href="mailto:reservations@bacoletbeachclub.com">
              Renee at reservations@bacoletbeachclub.com
            </a>{' '}
            <em>OR</em>&nbsp;a&nbsp;<u>WhatsApp message to +1 (868) 463 4604</u>
            . In your email / message please reference the “Jackson Wedding” and
            include the following details:
          </p>
          <p>
            <b>Number of guests</b>
            <br />
            <b>Dates of proposed stay</b>
            <br />
            <b>Contact details (telephone # / email)</b>
            <br />
          </p>

          <p className="alert-message">
            If you need to change your previous reservation please reference The
            Jackson wedding and share that this change is needed due to the
            global COVID19 pandemic.
          </p>
        </div>
      </div>
    </div>
    <style jsx>{`
      section {
        padding: 120px 0 60px;
        display: flex;
        flex-direction: column;
      }

      .alert-message {
        color: red;
        line-height: 18px;
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
        line-height: 40px;
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
