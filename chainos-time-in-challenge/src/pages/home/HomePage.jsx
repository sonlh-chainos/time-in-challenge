import Coutdown from 'components/coutdown/Coutdown';
import React, { useEffect, useState } from 'react';
import avatar from '../../assets/img/avatar.jpg';
import medal_silver from '../../assets/img/medal_silver.png';
import medal_gold from '../../assets/img/medal_gold.png';
import medal_bronze from '../../assets/img/medal_bronze.png';
import icon_arrow_up from '../../assets/img/icon_arrow_up.png';
import icon_arrow_down from '../../assets/img/icon_arrow_down.png';
import icon_cross from '../../assets/img/icon_cross.png';
import nghiem from '../../assets/img/nghiem.jpg';

const HomePage = () => {
  const [listInTime, setListInTime] = useState();
  const [listLate, setListLate] = useState();

  useEffect(() => {
    fetch(
      'http://192.168.1.88:4444/top-attendance?from_date=2022-09-01&to_date=2022-09-30&early_thredhold=3&late_thredhold=3'
    )
      .then((results) => results.json())
      .then((data) => {
        const new_list = data.data.early;
        const new_list_late = data.data.late;
        setListInTime(new_list);
        setListLate(new_list_late);
      });
  }, []);
  console.log(listInTime, 'listInTime');

  return (
    <div className="home-page">
      <Coutdown />
      <div className="wrapper">
        <div className="wrapper-left">
          <div className="header">Top in time</div>
          {listInTime
            ?.filter((user, index) => index < 3)
            ?.map((user, index) => (
              <div className="user-top">
                {index === 1 ? (
                  <div className="medal">
                    <div>2</div>
                    <div className="wrapper-user-top">
                      <div className="w-120 image-avatar">
                        <img
                          src={user.image}
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
                ) : (
                  ''
                )}
              </div>
            ))}
          {/* <div className="user-top">
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
          </div> */}
          <div className="table-statistical">
            {listInTime?.map((user, index) => (
              <div className="wrapper-statistical" key={index}>
                <div className="rank">
                  <div className="current-rank">{index + 1}</div>
                  <div className="status-rank">
                    <div className="arrow">
                      {user.change > 0 ? (
                        <img src={icon_arrow_up} alt="arrow up" />
                      ) : user.change === 0 ? (
                        <img src={icon_cross} alt="icon cross" />
                      ) : (
                        <img src={icon_arrow_down} alt="arrow up" />
                      )}
                    </div>
                    <div className="status-number-rank">
                      {user.change === 0 ? '' : user.change}
                    </div>
                  </div>
                </div>
                <div className="avt-top">
                  <div className="avatar">
                    {user.staff_id === 'CH0096' ? (
                      <img src={nghiem} alt="avatar" />
                    ) : (
                      <img src={user.image} alt="avatar" />
                    )}
                  </div>
                  <div className="username">{user.staff}</div>
                </div>
                <div className="count-number">{user.count}</div>
              </div>
            ))}
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
          <div className="table-statistical">
            {listLate
              ?.filter((i, index) => index < 6)
              ?.map((user, index) => (
                <div className="wrapper-statistical" key={index}>
                  <div className="rank">
                    <div className="current-rank">{index + 1}</div>
                    <div className="status-rank">
                      <div className="arrow">
                        {user.change > 0 ? (
                          <img src={icon_arrow_up} alt="arrow up" />
                        ) : user.change === 0 ? (
                          <img src={icon_cross} alt="icon cross" />
                        ) : (
                          <img src={icon_arrow_down} alt="arrow up" />
                        )}
                      </div>
                      <div className="status-number-rank">
                        {user.change === 0 ? '' : user.change}
                      </div>
                    </div>
                  </div>
                  <div className="avt-top">
                    <div className="avatar">
                      {user.staff_id === 'CH0096' ? (
                        <img src={nghiem} alt="avatar" />
                      ) : (
                        <img src={user.image} alt="avatar" />
                      )}
                    </div>
                    <div className="username">{user.staff}</div>
                  </div>
                  <div className="count-number">{user.count}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
