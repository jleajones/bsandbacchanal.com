import React, { useState } from 'react'
import ReactSVG from "react-svg";

const Dialog = ({ showDialog, onSubmit }) => {
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');

  const onClose = () => {
    const body = document.querySelector('body');
    const html = document.querySelector('html');
    body.style.overflow = "auto";
    html.style.overflow = "auto";
    showDialog({ showDialog: false });
  };

  return (
      <section>
        <div className='dialog'>
          {error && <p className='error'>{error}</p>}

          <div className='container'>
            <ReactSVG
                src={`/static/close.svg`}
                beforeInjection={svg => {
                  svg.setAttribute('style', 'width: 24px; height: auto; cursor: pointer');
                }}
                onClick={onClose}
            />
            <p>Please enter the password to proceed.</p>
            <div className='content'>
              <input className='input' type='password' placeholder='password' value={password} onChange={(e) => {
                setPassword(e.target.value);
              }}/>
              <input className='input input-button' type='submit' value='Enter' onClick={() => {
                const { hasError, successCallback } = onSubmit(password);
                if (hasError) {
                  setError('Sorry, the password you entered is incorrect.  Please try again.');
                  setTimeout(() => {
                    setError('');
                  }, 2000)
                } else {
                  onClose();
                  successCallback();
                }
              }}/>
            </div>
          </div>
        </div>
        <div className='overlay' onClick={onClose}/>

        <style jsx>{`
          section {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height 100%;
            z-index: 999999;
          }
          
          .dialog {
            background: #ffffff;
            box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.65);
            position: relative;
            z-index: 1;
            max-width: 70%;
            margin: 0 auto;
            top: 130px;
            border: solid 1px #ccc;
          }
          
          .container {
            padding: 20px 20px 60px
          }
          
          .error {
            color: #fff;
            background: red;
            padding: 6px;
            margin: 0;
            font-size: 10px;
          }
          
          p {
            color: #666;
            text-align: center;
          }
          
          .content {
            display: flex;
            justify-content: center;
          }
            
          @media (max-width: 1024px) {
            .content {
              flex-direction: column;
            }
            
            .input {
              margin-bottom: 30px;
            }
          }
          
          .input {
            border: none;
            border-bottom: solid 1px #666;
            color: #ccc;
            font-size: 24px;
            margin: 12px;
          }
          
          .input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #ccc;
            opacity: 1; /* Firefox */
          }
      
          .input:-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: #ccc;
          }
      
          .input::-ms-input-placeholder { /* Microsoft Edge */
              color: red;
          }
          
          .input-button {
            border: solid 1px #ccc;
            padding-left 20px;
            padding-right 20px;
            background-color: #e3c5c3;
            color: #fff;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
         .input-button:hover {
          background-color: #D3A3A0;
         }
          
          .input:focus {
            outline: none;
          } 
          
          .overlay {
            background-color: rgba(0, 0, 0, 0.55);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height 100%;
          }
        `}</style>
      </section>
  );
}

export default Dialog;
