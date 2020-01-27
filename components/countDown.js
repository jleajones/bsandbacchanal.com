import React from 'react';
import Countdown from 'react-countdown';
import Welcome from "./welcome";

const CountDownWidget = ({}) => {
  const date = new Date(1591481700000);
  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return 'Congratulations!';
    } else {
      // Render a countdown
      return (
        <div>
          <span>{days} days left</span>

          <style jsx>{`
          div {
            position: absolute;
            top: 90%;
            color: #fff;
            width: 100%;
            text-align: center;
            font-family: bickham-script-pro-3, serif;
            font-size: 80px;
            line-height: 35px;
          }
      `}</style>
        </div>
      );
    }
  };

  return <Countdown date={date} renderer={renderer} />;
};

export default CountDownWidget;
