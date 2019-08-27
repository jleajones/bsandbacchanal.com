import React from 'react'
import ReactSVG from 'react-svg'
import moment from 'moment';


const DateCallout = () => {
  const weddingDay = moment([2020, 6, 6]);
  const today = moment();
  const daysLeft = weddingDay.diff(today, 'days');
  return (
      <div>
        <ReactSVG
            src="/static/calendar.svg"
            beforeInjection={svg => {
              svg.setAttribute('style', 'width: 150px; height: auto; fill: #fff;');
            }}
        />
        { /*<span className='days-left'>{daysLeft}</span>*/ }
        <h2><span>Saturday</span>06.06.20</h2>

        <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          text-align: center;
          position: relative;
        } 
        
        h2 {
          text-align: center;
          text-transform: uppercase;
          font-family: skolar-sans-latin, sans-serif;
          font-size: 32px;
          line-height: 32px;
          color: #fff;
        }
        
        h2 > span {
          display: block;
          font-weight: 100;
          font-style: normal;
          font-size: 18px;
          line-height: 24px;
        }
        
        .days-left {
          position: absolute;
          top: 74px;
          left: 54px;
          font-size: 24px;
        }
      `}</style>
      </div>
  );
};

export default DateCallout;