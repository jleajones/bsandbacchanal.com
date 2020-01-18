import React, { useEffect, useState } from 'react';
import EventForm from './eventForm';
import EventFormSuccess from './eventFormSuccess';

const getCookie = function (name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
};

const Event = ({ data, eventId }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [eventIds, setEventIds] = useState([]);
  useEffect(() => {
    const storedEventIds = getCookie('bs_events').split(',').map(Number);
    setEventIds([...storedEventIds, ...eventIds]);
  }, []);

  const handleRsvp = formData => {
    // TODO: make request to send data
    const bsEvents = [...eventIds, eventId].join(',');
    document.cookie = `bs_events=${bsEvents}`;
    console.log(formData);
    setIsSubmitted(true);
  };


  const showForm = !isSubmitted && !eventIds.includes(eventId);
  const showEmailMsg = !isSubmitted && !showForm;
  return (
    <section className="event">
      <div className="container">
        <div className="item">
          <h2>{data.display}</h2>
          <p>
            {data.date}
            <br />
            {data.location}
          </p>
          {showForm && (
            <EventForm
              eventId={eventId}
              onSubmit={handleRsvp}
              details={data.details}
            />
          )}
          {isSubmitted && <EventFormSuccess />}
          {showEmailMsg && (
              <p>Thank you for your reservation.  Please email <a href="mailto:britniandsamuel@gmail.com" style={{color: '#e3c5c3'}}>britniandsamuel@gmail.com</a> to make any modifications.</p>
          )}
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

        .title .text p {
          margin-top: 5px;
        }

        h2 {
          font-family: bickham-script-pro-3, serif;
          text-align: center;
          font-weight: 100;
          font-size: 70px;
          line-height: 50px;
          margin: 0;
          color: #e3c5c3;
        }

        p {
          margin: 20px 0;
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
};

export default Event;
