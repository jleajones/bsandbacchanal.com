import React from 'react';

// import language from '../constants/language';

const OurStoryContent = () => (
  <section>
    <div className="container">
      <div className="item">
        <h2>How it all began</h2>
        <p>
          Our story began at Dartmouth College in 2005 when Britni was a
          Freshman and Samuel was a Senior. Over the course of that year our
          friendship grew from one that started with impassioned debates over
          meaningful and meaningless topics, sustained by a shared love for
          fried dumplings and dark liquor into one where...
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
        color: #cccccc;
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

export default OurStoryContent;
