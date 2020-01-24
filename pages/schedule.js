import React from 'react';

import PhotoBlock from '../components/photoBlock';
import ProtectedPage from '../components/protectedPage';
import Event from "../components/event";

const Schedule = ({ isLoggedIn }) => {

  const events = [{
    display: 'Welcome Reception',
    date: 'Thursday, June 4th 6pm-10pm EST',
    location: 'RenMar\'s Restaurant & Bar at Pigeon Point Beach',
    details: ''
  },
    {
      display: 'Buccoo Reef & Nylon Pool Tour',
      date: 'Friday, June 5th at 11am ET',
      location: 'Pigeon Point Beach',
      details: (
          <div>
            <p style={{color: '#c6c6c6', margin: 0, textAlign: 'center'}}><b>RSVP Required</b></p>
          </div>
      )
    },
    {
      display: 'Wedding Ceremony & Reception',
      date: 'Saturday, June 6 th 5:15pm ET',
      location: 'Ohana Villa Scarborough, Tobago',
      details: ''
    },
    {
      display: 'Farewell Brunch',
      date: 'Sunday, June 7 th 1:00pm ET',
      location: 'Ohana Villa Scarborough, Tobago',
      details: ''
    }];
  return (
    <ProtectedPage isLoggedIn={isLoggedIn}>
      <PhotoBlock
        backgroundImage="/static/gotYourBack_bg.png"
        height="500px"
        textColor="#000000"
      >
        <h3>Schedule</h3>
      </PhotoBlock>
      {
        events.map((event, idx) => (
            <Event data={event} eventId={idx} key={idx}/>
        ))
      }

      <section className="event">
        <div className="container">
          <div className="item">
            <p><b><em>Shuttle transportation will be provided to and from each of the above scheduled events.</em></b></p>
          </div>
        </div>
      </section>
      <style jsx>{`
        h3 {
          text-align: left;
          font-family: bodoni-urw, serif;
          font-weight: 400;
          font-style: normal;
          color #ffffff;
          font-size: 72px;
          line-height: 50px;
          padding: 320px 0 0;
          text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.8);
        }

      p {
        margin-top: -100px;
        color: #c6c6c6;
        line-height: 32px;
      }
        

      section {
        padding: 120px 0 30px;
        display: flex;
        flex-direction: column;
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
    </ProtectedPage>
  );
};

export default Schedule;
