import React, { useState } from 'react';

const EventForm = ({ onSubmit, eventId, details }) => {
  // TODO: create form state `useReducer???`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [count, setCount] = useState('');
  const [attendance, setAttendance] = useState(false);

  const [isDisabled, setIsDisabled] = useState(true);

  // TODO: create single handler to update form state
  const handleSelectOnChange = event => {
    setCount(event.target.value);

    if (event.target.value && name !== '' && email !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleNameInputOnChange = event => {
    setName(event.target.value);

    if (event.target.value && count !== '' && email !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleEmailInputOnChange = event => {
    setEmail(event.target.value);

    if (event.target.value && count !== '' && name !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleAttendanceOnChange = (event) => {
    setAttendance(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit({ name, count, email, attendance });
  };

  return (
    <div className="form">
      <div className="notes">{details && details}</div>
      <div className="input">
        <label htmlFor={`name-${eventId}`}>
          Name:{' '}
          <input
            type="text"
            name="name"
            id={`name-${eventId}`}
            placeholder="Please enter your name"
            value={name}
            onChange={handleNameInputOnChange}
          />
        </label>
      </div>
      <div className="input">
        <label htmlFor={`email-${eventId}`}>
          Email:{' '}
          <input
            type="email"
            name="email"
            id={`name-${eventId}`}
            placeholder="Please enter your email address"
            value={email}
            onChange={handleEmailInputOnChange}
          />
        </label>
      </div>
      <div className="input radio-container">
        <label style={{ marginRight: '12px' }}>Attending:</label>
        <label htmlFor={`attending-${eventId}`}>
          Yes{' '}
          <input
            type="radio"
            name="attending"
            id={`attending-${eventId}`}
            value="yes"
            onChange={handleAttendanceOnChange}
          />
        </label>
        <label htmlFor={`not-attending-${eventId}`}>
          No{' '}
          <input
            type="radio"
            name="attending"
            id={`not-attending-${eventId}`}
            value="no"
            onChange={handleAttendanceOnChange}
          />
        </label>
      </div>
      <div className="input">
        <label htmlFor={`count-${eventId}`}>
          # of People:{' '}
          <select
            id={`count-${eventId}`}
            name="count"
            value={count}
            onChange={handleSelectOnChange}
          >
            <option value="">Select number of people in your party</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
      </div>
      <div className="input">
        <input
          type="submit"
          value="RSVP"
          onClick={handleSubmit}
          disabled={isDisabled}
        />
      </div>
      <style jsx>{`


      .form {
      max-width: 320px;
      margin: 0 auto;
      }

      .form .notes {
      margin-bottom: 15px;
      }

      .input {
        text-align: left;
        margin-bottom: 15px;
      }

      .input.radio-container {
        display: flex;
      }

      .input.radio-container input[type='radio'] {
      margin: 0 12px 0 4px;
      }

      .input label {
        color: #aaa;
        display: flex;
        align-items: center;
      }

      .input input[type='text'],
      .input input[type='email'],
      .input select {
        padding: 8px;
        flex-grow: 1;
        margin-left: 8px;
      }

      .input input[type='submit'] {
        padding: 8px;
        text-transform: uppercase;
        letter-spacing: 1.25px;
        border: solid 1px #fff;
        padding-left 20px;
        padding-right 20px;
        background-color: #e3c5c3;
        color: #fff;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 100%;
      }

      .input input[type='submit']:hover {
        background-color: #D3A3A0;
        border: solid 1px #e3c5c3;
      }

      .input input[type='submit']:disabled {
        cursor: not-allowed;
        background-color: #c6c6c6;
        border: none;
      }
        `}</style>
    </div>
  );
};

export default EventForm;
