import React from 'react'

import language from "../constants/language";

const Hero = () => (
    <section>
      <div className='container'>
        <div>
          <div className='date'>
            <span>{language.dateMonth()}</span>
            <span className='accent'>{language.dateDate()}</span>
            <span>{language.dateYear()}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        section {
          height: 700px;
          background-image: url(/static/bs_hero.png);
          background-repeat: no-repeat;
          background-position: center 0;
          background-size: cover;
        }
        
        .container {
          max-width: 1024px;
          margin: 0 auto;
          display: flex;
          justify-content: flex-end;
        } 
        
        h2 {
          font-family: bodoni-urw, serif;
          font-weight: 100;
          font-style: normal;
          font-size: 120px;
          line-height: 60px;
          text-transform: capitalize;
          color: #ffffff;
          padding-top: 350px;
          text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.8);
        }
        
        .date {
          font-family: bodoni-urw, serif;
          font-weight: 100;
          font-style: normal;
          font-size: 120px;
          line-height: 100px;
          text-transform: capitalize;
          color: #ffffff;
          padding-top: 180px;
        }
        
        .date > span {
          display: block;
          margin-bottom: 15px;
          text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.8);
        }
        
        .date > .accent {
          color: #e3c5c3;
        }
        
        @media (max-width: 1024px) {
          section {
            background-repeat: no-repeat;
            background-position: 35% 0;
          }
          
          .container {
            padding: 0 20px;
          }
        
          .date {
            font-size: 100px;
            line-height: 100px;
            padding-top: 190px;
          }
        }
        
         @media (max-width: 768px) {
          section {
            background-repeat: no-repeat;
            background-position: 35% 0;
            margin-top: 119px;
          }
          
          .container {
            padding: 0 10px;
          }
        
          .date {
            font-size: 60px;
            line-height: 60px;
            padding-top: 340px;
          }
        }
        
        @media (max-width: 320px) {
          section {
            background-position: 35% 0;
            margin-top: 109px;
          }
          
          .container {
            padding: 0 10px;
          }
        
          h2 {
            font-size: 60px;
            line-height: 60px;
            text-transform: capitalize;
            color: #ffffff;
            padding-top: 320px;
            text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.8);
          }
        
          .date {
            font-size: 60px;
            line-height: 60px;
            text-transform: capitalize;
            color: #ffffff;
            padding-top: 280px;
          }
        }
      `}</style>
    </section>
);

export default Hero;
