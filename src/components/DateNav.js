import React from 'react';
import UserIconImg from '../images/user-icon.png';

const DateNav = () => {
  return (
    <div>
      <section className="container__date">
        <div className="date">
          <span>Thu 19 Aug 12.00 AM</span>
        </div>
        <div className="user__info">
          <div className="user__name">
            <p>
              Welcome <span>John</span>
            </p>
          </div>
          <div className="user__icon">
            <img src={UserIconImg} alt="User" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DateNav;
