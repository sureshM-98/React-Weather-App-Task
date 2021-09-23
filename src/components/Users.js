import React from 'react';
import DateNav from './DateNav';
import Logo from '../images/Logo.png';
import AddUserImg from '../images/add-user.png';
import UsersImg from '../images/users.png';
import WeatherImg from '../images/weather.png';
import { Link } from 'react-router-dom';

const Users = () => {
  return (
    <div className="container">
      {/* <!-- Sidebar --> */}
      <aside className="container__sidebar">
        <div className="sidebar__content">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="line">
            <span className="horizontal-line">
              <hr />
            </span>
          </div>
          <div className="nav__sidebar">
            <ul className="navigation">
              <li>
                <img src={AddUserImg} alt="Add user" /> <Link to="/">Add Users</Link>
              </li>
              <li className="active">
                <img src={UsersImg} alt="Users" />
                <Link to="/users">Users</Link>
              </li>
              <li>
                <img src={WeatherImg} alt="Weather" />
                <Link to="/weather">Weather</Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      {/* <!-- Main --> */}
      <main className="container__main">
        {/* <!-- Date Section --> */}
        <DateNav />

        {/* <!-- Add User Section --> */}
        <div className="container__input">
          <div className="title">
            <p>Users</p>
          </div>

          <section className="container__fields"></section>
        </div>
      </main>
    </div>
  );
};

export default Users;
