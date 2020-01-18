import React, { useState} from 'react';

const EventForm = ({ onSubmit, eventId, details }) => {

  const [name, setName] = useState('');
  const [count, setCount] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSelectOnChange = (event) => {
    setCount(event.target.value);

    if (event.target.value && name !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true)
    }
  };

  const handleInputOnChange = (event) => {
    setName(event.target.value);

    if (event.target.value && count !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true)
    }
  };

  const handleSubmit = () => {
    onSubmit({name, count});
  };
  return (
      <div className='form'>
        <div className='notes'>
          {details && (details)}
        </div>
        <div className='input'>
          <label htmlFor={`name-${eventId}`}>
            Name: <input type='text' id={`name-${eventId}`} placeholder='Please enter your name' value={name} onChange={handleInputOnChange}/>
          </label>
        </div>
        <div className='input'>
          <label htmlFor={`count-${eventId}`}>
            # of People: <select id={`count-${eventId}`} value={count} onChange={handleSelectOnChange}>
            <option value=''>Select number of people in your party</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
          </label>
        </div>
        <div className='input'>
          <input type='submit' value='RSVP' onClick={handleSubmit} disabled={isDisabled}/>
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
      
      .input label {
        color: #aaa;
        display: flex;
        align-items: center;
      }
      
      .input input[type='text'],
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
  )
}

export default EventForm;
