import React from 'react';

import DateNav from './DateNav';
import Sidebar from './Sidebar';

const AddUser = () => {
  return (
    <div className="container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="container__main">
        {/* Date Section  */}
        <DateNav />

        {/* Add User Section  */}
        <div className="container__input">
          <div className="title">
            <p>Add User</p>
          </div>

          <section className="container__fields">
            <div className="all__fields">
              <div className="username__info">
                <div className="input__title">
                  <p>Username</p>
                </div>
                <div className="input__field">
                  <input type="text" />
                </div>
              </div>
              <div className="username__info">
                <div className="input__title">
                  <p>Email</p>
                </div>
                <div className="input__field">
                  <input type="email" />
                </div>
              </div>
              <div className="username__info">
                <div className="input__title">
                  <p>Phone</p>
                </div>
                <div className="input__field">
                  <input type="number" />
                </div>
              </div>
              <div className="username__info">
                <div className="input__title">
                  <p>DOB</p>
                </div>
                <div className="input__field">
                  <input type="date" />
                </div>
              </div>
              <div className="username__info">
                <div className="input__title">
                  <p>State</p>
                </div>
                <div className="input__field">
                  <input type="text" />
                </div>
              </div>
              <div className="username__info">
                <div className="input__title"></div>
                <div className="input__field">
                  <button type="button">Create User</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AddUser;
