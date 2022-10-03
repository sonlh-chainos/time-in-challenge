import Coutdown from 'components/coutdown/Coutdown';
import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page">
      <Coutdown />
      <div className="wrapper">
        <div className="wrapper-left">
          <div className="header">Top in time</div>
          <div className="user-top">
            <div className="medal">1</div>
            <div className="medal">1</div>
            <div className="medal">1</div>
          </div>
          <div className="table-statistical">
            <div className="wrapper-statistical">
              <div className="rank">
                <div className="current-rank">1</div>
                <div className="status-rank">
                  <img src="" alt="" />
                  <div className="status-number-rank">1</div>
                </div>
                <div className="avt-top">
                  <div className="avatar"></div>
                  <div className="username">John</div>
                </div>
                <div className="count-number">12</div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-left">
          <div className="header">Top late</div>
          <div className="user-top">
            <div className="medal">2</div>
            <div className="medal">1</div>
            <div className="medal">3</div>
          </div>
          <div className="table-statistical">
            <div className="wrapper-statistical">
              <div className="rank">
                <div className="current-rank">1</div>
                <div className="status-rank">
                  <img src="" alt="" />
                  <div className="status-number-rank">1</div>
                </div>
                <div className="avt-top">
                  <div className="avatar"></div>
                  <div className="username">John</div>
                </div>
                <div className="count-number">12</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
