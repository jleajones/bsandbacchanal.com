import React from 'react';

const Event = ({ data }) => (
  <section className="event">
    <div className="container">
      <div className="item">
        <h2>{data.display}</h2>
        <p>{data.date}<br/>{data.location}</p>
        {data.details && (data.details)}
      </div>
    </div>
    <style jsx>{`
      section {
        padding: 120px 0 30px;
        display: flex;
        flex-direction: column;
      }
      
      .title {
        display: flex;
        font-family: bodoni-urw, serif;
        font-size: 20px;
        color: #c6c6c6;
        align-items: center;
      }
      
      .title .text  p{
        margin-top: 5px;
      }
      
      h2 {
        font-family: bickham-script-pro-3, serif;
        text-align: center;
        font-weight: 100;
        font-size: 70px;
        line-height: 20px;
        margin: 0;
        color: #e3c5c3;
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

export default Event;
