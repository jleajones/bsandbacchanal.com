import React from 'react';

// import language from '../constants/language';

const AccommodationsContent = () => (
  <section>
    <div className="container">
      <div className="item">
        <h2>Where to stay...</h2>
        <p>
          We hope that you’ll join us for more than just the wedding day itself
          and have the opportunity to experience the unique beauty that Tobago
          has to offer. Accordingly, we’ve pre-selected a few housing options
          based on amenities and convenience. If you have questions or are
          interested in alternative accommodations, please reach out to our
          wedding coordinator Tricia at <a href="">eventsbytricia@hotmail.com</a> or us
          directly at <a href="">britniandsamuel@gmail.com</a>.
        </p>
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
    `}</style>
  </section>
);

export default AccommodationsContent;
