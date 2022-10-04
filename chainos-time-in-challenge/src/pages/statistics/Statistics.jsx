import React from 'react';
import avatar from '../../assets/img/avatar.jpg';
import medal_silver from '../../assets/img/medal_silver.png';
import medal_gold from '../../assets/img/medal_gold.png';
import medal_bronze from '../../assets/img/medal_bronze.png';
import icon_arrow_up from '../../assets/img/icon_arrow_up.png';
import icon_arrow_down from '../../assets/img/icon_arrow_down.png';
import nghiem from '../../assets/img/nghiem.jpg';
const Statistics = () => {
  return (
    <div className='home-page'>
      <div className="wrapper" style={{marginTop: "200px"}}>
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
