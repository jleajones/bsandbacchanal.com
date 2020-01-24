import React from 'react';

const Person = ({ data }) => (
    <section className="event">
      <div className="container">
        <div className="item">
          <h2>{data.flag && <span className={data.flag.replace(/\s/g, '-')}>{data.flag}:</span>}<br />{data.name}</h2>
          <img src={data.imageUrl} />
          {data.blurb}
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
      
      h2 span {
        font-family: bodoni-urw, serif;
        font-size: 24px;
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
        max-width: 720px;
        margin: 0 auto;
        text-align: center;
      }

      .container > .item p {
        max-width: 660px;
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

export default Person;
