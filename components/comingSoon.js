import React from 'react'
import Link from "next/link";

const ComingSoon = () => (
    <section className='welcome'>
      <div className='container'>
        <div className='item'>
          <h2>Coming Soon...</h2>
          <p>We are working to provide you with the best experience possible!  Please check back in the upcoming weeks
            for more details.</p>
        </div>
      </div>

      <style jsx>{`
        section {
          padding: 120px 0;
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

export default ComingSoon;
