import React from 'react';
import Countdown from 'react-countdown';

const Coutdown = () => {
  let date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth();
  let lastDay = new Date(y, m + 1, 0);
  // Random component
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className="custom-coutdown">
          <div className="box-time">
            <div className="time-item">{`${days > 9 ? days : '0' + days}`}</div>
            <div className="name-time">Days</div>
          </div>
          <div className="box-time">
            <div className="time-item">{`${
              hours > 9 ? hours : '0' + hours
            }`}</div>
            <div className="name-time">Hours</div>
          </div>
          <div className="box-time">
            <div className="time-item">{`${
              minutes > 9 ? minutes : '0' + minutes
            }`}</div>
            <div className="name-time">Minutes</div>
          </div>
          <div className="box-time">
            <div className="time-item">{`${
              seconds > 9 ? seconds : '0' + seconds
            }`}</div>
            <div className="name-time">Seconds</div>
          </div>
        </span>
      );
    }
  };

  return (
    <div className="coutdown">
      <Countdown date={new Date(lastDay)} renderer={renderer} />
    </div>
  );
};

export default Coutdown;
