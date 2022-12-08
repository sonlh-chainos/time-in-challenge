import React, { useEffect, useState } from 'react';
import medal_silver from '../../assets/img/medal_silver.png';
import medal_gold from '../../assets/img/medal_gold.png';
import medal_bronze from '../../assets/img/medal_bronze.png';
import icon_arrow_up from '../../assets/img/icon_arrow_up.png';
import icon_arrow_down from '../../assets/img/icon_arrow_down.png';
import icon_cross from '../../assets/img/icon_cross.png';
import nghiem from '../../assets/img/nghiem.png';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import ReactTooltip from 'react-tooltip';
import { TextField } from '@mui/material';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import unknown_person from '../../assets/img/unknown_person.png';

const test = (user) => {
  switch (user.staff_id) {
    case 'CH0096':
      return nghiem;

    default:
      return user.image;
  }
};
const Statistics = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [listInTime, setListInTime] = useState();
  const [listLate, setListLate] = useState();

  useEffect(() => {
    const firstDayOfMonth = dayjs(currentDate)
      .startOf('month')
      .format('YYYY-MM-DD');
    const lastDayOfMonth = dayjs(currentDate)
      .endOf('month')
      .format('YYYY-MM-DD');

    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://118.70.67.17:18844/top-attendance?from_date=${firstDayOfMonth}&to_date=${lastDayOfMonth}`
        );
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
    // const interval = setInterval(() => {
    //   fetchData();
    // }, 5000);
    // return () => clearInterval(interval);
  }, [currentDate]);
  return (
    <div className="home-page">
      <div className="time-month">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            value={currentDate}
            minDate={dayjs('2022-01-01')}
            maxDate={dayjs(new Date())}
            views={['year', 'month']}
            onChange={(date) => {
              setCurrentDate(date);
            }}
            renderInput={(params) => <TextField {...params} />}
            className="custom-datepicker"
          />
        </LocalizationProvider>
      </div>
      <div className="wrapper">
        <div className="wrapper-left">
          <div className="header">Top in time</div>
          {/* <div className="user-top">
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
            {Array.from({
              length: 3 - (listInTime?.length ?? 3),
            }).map((user, index) => (
              <div className="medal" key={index}>
                <div className="rank-number">
                  {index + 1 + listInTime.length}
                </div>
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
            ))}
          </div> */}

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
                            <div
                              style={
                                item.best === 1
                                  ? { color: 'green', fontWeight: 'bold' }
                                  : {}
                              }
                              key={i}
                            >{`${item.checkin + ' | ' + item.count} `}</div>
                          ))}
                        </div>
                      );
                    }}
                  />
                </React.Fragment>
              ))}
            {Array.from({ length: 5 - (listInTime?.length ?? 5) }).map(
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
          {/* <div className="user-top">
            {listLate
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
            {Array.from({
              length: 3 - (listLate?.length ?? 3),
            }).map((user, index) => (
              <div className="medal" key={index}>
                <div className="rank-number">{index + 1 + listLate.length}</div>
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
            ))}
          </div> */}
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
                            <div
                              style={
                                item.best === 1
                                  ? { color: 'red', fontWeight: 'bold' }
                                  : {}
                              }
                              key={i}
                            >{`${item.checkin + ' | ' + item.count}`}</div>
                          ))}
                        </div>
                      );
                    }}
                  />
                </React.Fragment>
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
        </div>
      </div>
    </div>
  );
};

export default Statistics;
