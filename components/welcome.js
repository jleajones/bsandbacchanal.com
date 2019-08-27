import React from 'react'
import Link from "next/link";

const Welcome = () => (
    <section className='welcome'>
      <div className='container'>
        <div className='item'>
          <h2>Welcome</h2>
          <p className='subText'><Link href="#"><a>#bsandbacchanal</a></Link></p>
          <p>Welcome to our wedding website, we can’t wait to celebrate our special day with you</p>
          <p>We recognize and appreciate that almost all of you will be taking time out of your hectic lives to travel and
            celebrate with us and we’ve created this website with that in mind as a convenient and interactive way to share
            all of the important details with you in the lead up to our wedding.</p>
          <p>You can also read more about our love story, get to know our standout wedding party and check out our registry
            information. Read as much (or as little) as you like and most importantly don’t forget to RSVP!</p>
          <p>Finally, a sincere thank you to all of you for your ongoing love and support. We are so excited to share this
            wedding weekend with you and look forward to an experience full of bacchanal with our closest family and
            friends!</p>
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
          color: #666666;
          line-height: 24px;
        }
        
        p a {
          color: #cccccc;
        }
        
        p a:hover {
          color: #D3A3A0;
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

export default Welcome;