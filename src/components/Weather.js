import React from 'react';
import DateNav from './DateNav';
import Logo from '../images/Logo.png';
import AddUserImg from '../images/add-user.png';
import UsersImg from '../images/users.png';
import WeatherImg from '../images/weather.png';
import { Link } from 'react-router-dom';

const Weather = () => {
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
              <li>
                <img src={UsersImg} alt="Users" />
                <Link to="/users">Users</Link>
              </li>
              <li className="active">
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
            <p>Weather</p>
          </div>

          <section className="container__weather">
            <div className="sub__weather">
              <div className="state">
                <div className="input__state">
                  <p>Select State</p>
                </div>
                <div className="input__drop">
                  <input type="text" name="city" list="cityname" />
                  <datalist id="cityname">
                    <option value="Boston"></option>
                    <option value="Cambridge"></option>
                  </datalist>
                </div>
              </div>

              <div className="show__temp">
                <div className="temp__box">
                  <div className="temp">
                    <p>Temperature</p>
                  </div>
                  <div className="degree">
                    <span>14°C</span>
                  </div>
                </div>
                <div className="temp__box">
                  <div className="temp">
                    <p>Humidity</p>
                  </div>
                  <div className="degree">
                    <span>| 69 |</span>
                  </div>
                </div>
                <div className="temp__box">
                  <div className="temp">
                    <p>Pressure</p>
                  </div>
                  <div className="degree">
                    <span>1016</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Weather;
