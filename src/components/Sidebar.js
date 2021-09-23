import React from 'react';
import Logo from '../images/Logo.png';
import AddUserImg from '../images/add-user.png';
import UsersImg from '../images/users.png';
import WeatherImg from '../images/weather.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
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
            <li className="active">
              <img src={AddUserImg} alt="Add user" /> <Link to="/">Add Users</Link>
            </li>
            <li>
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
  );
};

export default Sidebar;
