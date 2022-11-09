import Coutdown from 'components/coutdown/Coutdown';
import React, { useEffect, useState } from 'react';
import avatar from '../../assets/img/avatar.jpg';
import medal_silver from '../../assets/img/medal_silver.png';
import medal_gold from '../../assets/img/medal_gold.png';
import medal_bronze from '../../assets/img/medal_bronze.png';
import icon_arrow_up from '../../assets/img/icon_arrow_up.png';
import icon_arrow_down from '../../assets/img/icon_arrow_down.png';
import icon_cross from '../../assets/img/icon_cross.png';
import nghiem from '../../assets/img/nghiem.png';
import unknown_person from '../../assets/img/unknown_person.png';
import ReactTooltip from 'react-tooltip';

const test = (user) => {
  switch (user.staff_id) {
    case 'CH0096':
      return nghiem;

    default:
      return user.image;
  }
};

const HomePage = () => {
  const [listInTime, setListInTime] = useState();
  const [listLate, setListLate] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://118.70.67.17:18844/top-attendance`);
        const data = await res.json();
        const newListInTime = data.data.early;
        const newListLate = data.data.late;
        setListInTime(newListInTime);
        setListLate(newListLate);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <Coutdown />
      <div className="wrapper">
        <div className="wrapper-left">
          <div className="header">Top in time</div>
          <div className="user-top">
            {listInTime
              ?.filter((i, index) => index < 3)
              ?.map((user, index) => (
                <div className="medal" key={user.staff_id}>
                  <div className="rank-number">{index + 1}</div>
                  <div className="wrapper-user-top">
                    <div className={'image-avatar'}>
                      <img
                        src={test(user)}
                        alt="avatar"
                        className="custom-avt"
                      />

                      <div className="image-medal">
                        {index === 1 ? (
                          <img src={medal_silver} alt="medal silver" />
                        ) : index === 0 ? (
                          <img src={medal_gold} alt="medal gold" />
                        ) : (
                          <img src={medal_bronze} alt="medal bronze" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="name-user">{user.staff}</div>
                </div>
              ))}
            {Array.from({ length: 3 - (listInTime?.filter((i, index) => index < 3).length || 3) }).map(
              (user, index) => (
                <div className="medal" key={index}>
                  <div className="rank-number">{index + 1}</div>
                  <div className="wrapper-user-top">
                    <div className={'image-avatar'}>
                      <img
                        src={unknown_person}
                        alt="unknown person"
                        className="custom-avt"
                      />

                      <div className="image-medal">
                        {index === 1 ? (
                          <img src={medal_silver} alt="medal silver" />
                        ) : index === 0 ? (
                          <img src={medal_gold} alt="medal gold" />
                        ) : (
                          <img src={medal_bronze} alt="medal bronze" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="name-user">Unknown Person</div>
                </div>
              )
            )}
          </div>

          <div className="table-statistical">
            {listInTime
              ?.filter((i, index) => index < 5)
              ?.map((user, index) => (
                <React.Fragment key={user.staff_id}>
                  <div
                    className="wrapper-statistical"
                    data-tip={'a' + 'b'}
                    data-for={`toolTipInTime_${user.staff_id}`}
                  >
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
                        <img src={test(user)} alt="avatar" />
                      </div>
                      <div className="username">{user.staff}</div>
                    </div>
                    <div className="count-number">{user.count}</div>
                  </div>
                  <ReactTooltip
                    id={`toolTipInTime_${user.staff_id}`}
                    className="tooltip"
                    getContent={() => {
                      return (
                        <div>
                          {user.checkin_list.map((item, i) => (
                            <div key={i}>{`${
                              item.checkin + ' | ' + item.count
                            } `}</div>
                          ))}
                        </div>
                      );
                    }}
                  />
                </React.Fragment>
              ))}
            {Array.from({ length: 5 - (listInTime?.length || 5) }).map(
              (i, index) => (
                <div className="wrapper-statistical" key={index}>
                  <div className="rank">
                    <div className="current-rank">--</div>
                    <div className="status-rank">
                      <div className="arrow"></div>
                      <div className="status-number-rank">--</div>
                    </div>
                  </div>
                  <div className="avt-top">
                    <div className="avatar"></div>
                    <div className="username">--</div>
                  </div>
                  <div className="count-number">--</div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="wrapper-left">
          <div className="header">Top late</div>
          <div className="user-top">
            {listLate
              ?.filter((i, index) => index < 3)
              ?.map((user, index) => (
                <div className="medal" key={user.staff_id}>
                  <div className="rank-number">{index + 1}</div>
                  <div className="wrapper-user-top">
                    <div className={'image-avatar'}>
                      <img
                        src={user.image}
                        alt="avatar"
                        className="custom-avt"
                      />
                      <div className="image-medal">
                        {index === 1 ? (
                          <img src={medal_silver} alt="medal" />
                        ) : index === 0 ? (
                          <img src={medal_gold} alt="medal" />
                        ) : (
                          <img src={medal_bronze} alt="medal" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="name-user">{user.staff}</div>
                </div>
              ))}
            {Array.from({ length: 5 - (listLate?.length ?? 5) }).map(
              (i, index) => (
                <div className="wrapper-statistical" key={index}>
                  <div className="rank">
                    <div className="current-rank">--</div>
                    <div className="status-rank">
                      <div className="arrow"></div>
                      <div className="status-number-rank">--</div>
                    </div>
                  </div>
                  <div className="avt-top">
                    <div className="avatar"></div>
                    <div className="username">--</div>
                  </div>
                  <div className="count-number">--</div>
                </div>
              )
            )}
          </div>
          <div className="table-statistical">
            {listLate
              ?.filter((i, index) => index < 5)
              ?.map((user, index) => (
                <React.Fragment key={user.staff_id}>
                  <div
                    className="wrapper-statistical"
                    data-tip
                    data-for={`toolTipLate_${user.staff_id}`}
                  >
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
                        <img src={test(user)} alt="avatar" />
                      </div>
                      <div className="username">{user.staff}</div>
                    </div>
                    <div className="count-number">{user.count}</div>
                  </div>
                  <ReactTooltip
                    id={`toolTipLate_${user.staff_id}`}
                    className="tooltip"
                    getContent={() => {
                      return (
                        <div>
                          {user.checkin_list.map((item, i) => (
                            <div key={i}>{`${
                              item.checkin + ' | ' + item.count
                            }`}</div>
                          ))}
                        </div>
                      );
                    }}
                  />
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
