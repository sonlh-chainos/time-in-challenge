import React, { useState } from 'react';
import avatar from '../../assets/img/avatar.jpg';
import medal_silver from '../../assets/img/medal_silver.png';
import medal_gold from '../../assets/img/medal_gold.png';
import medal_bronze from '../../assets/img/medal_bronze.png';
import icon_arrow_up from '../../assets/img/icon_arrow_up.png';
import icon_arrow_down from '../../assets/img/icon_arrow_down.png';
import icon_cross from '../../assets/img/icon_cross.png';
import nghiem from '../../assets/img/nghiem.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Statistics = () => {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  return (
    <div className="home-page">
      <div className="time-month">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          showFullMonthYearPicker
        />
      </div>
      <div className="wrapper">
        <div className="wrapper-left">
          <div className="header">Top in time</div>

          <div className="user-top">
            <div className="medal">
              <div>2</div>
              <div className="wrapper-user-top">
                <div className="w-120 image-avatar">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="custom-avt border-silver"
                  />
                  <div className="image-medal right-5">
                    <img src={medal_silver} alt="medal" />
                  </div>
                </div>
              </div>
              <div className="name-user">John Robert</div>
            </div>
            <div className="medal">
              <div>1</div>
              <div className="wrapper-user-top">
                <div className="w-165 image-avatar">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="custom-avt border-gold"
                  />
                  <div className="image-medal right-25">
                    <img src={medal_gold} alt="medal" />
                  </div>
                </div>
              </div>
              <div className="name-user">John Robert</div>
            </div>
            <div className="medal">
              <div>3</div>
              <div className="wrapper-user-top">
                <div className="w-120 image-avatar">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="custom-avt border-bronze"
                  />
                  <div className="image-medal right-5">
                    <img src={medal_bronze} alt="medal" />
                  </div>
                </div>
              </div>
              <div className="name-user">John Robert</div>
            </div>
          </div>
        </div>
        <div className="wrapper-left">
          <div className="header">Top late</div>
          <div className="user-top">
            <div className="medal">
              <div>2</div>
              <div className="wrapper-user-top">
                <div className="w-120 image-avatar">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="custom-avt border-silver"
                  />
                  <div className="image-medal right-5">
                    <img src={medal_silver} alt="medal" />
                  </div>
                </div>
              </div>
              <div className="name-user">John Robert</div>
            </div>
            <div className="medal">
              <div>1</div>
              <div className="wrapper-user-top">
                <div className="w-165 image-avatar">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="custom-avt border-gold"
                  />
                  <div className="image-medal right-25">
                    <img src={medal_gold} alt="medal" />
                  </div>
                </div>
              </div>
              <div className="name-user">John Robert</div>
            </div>
            <div className="medal">
              <div>3</div>
              <div className="wrapper-user-top">
                <div className="w-120 image-avatar">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="custom-avt border-bronze"
                  />
                  <div className="image-medal right-5">
                    <img src={medal_bronze} alt="medal" />
                  </div>
                </div>
              </div>
              <div className="name-user">John Robert</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
