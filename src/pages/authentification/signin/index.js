import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signin } from '../../../api/auth';
import { setTokenWithExpiry } from '../../../api/helpers/HandleToken';
import Alert from '../../../utils/alert';
import { handleMany } from '../../../utils/handle';

export default function Login() {
  const [openAlert, setAlert] = useState(false);
  const [validationError, setError] = useState({ message: '' });

  const [person, addPerson] = useState({
    email: '',
    password: '',
  });
  const clickSubmit = (event) => {
    event.preventDefault();
    signin({ ...person }).then((data) => {
      if (data.error) {
        setError({ message: data.error });
        setAlert(true);
      } else {
        setTokenWithExpiry(data.token);
        setAlert(true);
        setError('');
        setTimeout(() => {
          window.location.href = '/cours';
        }, 500);
      }
    });
  };

  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                `url(${require('../../../assets/img/register_bg_2.png')})`,
            }}
          />
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6" />
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="Email"
                          onChange={handleMany(person, addPerson, 'email')}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="Password"
                          onChange={handleMany(person, addPerson, 'password')}
                        />
                      </div>
                      <div className="text-center mt-6">
                        <button
                          onClick={clickSubmit}
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="button"
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6 relative">
                  <div className="w-1/2">
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      className="text-gray-300"
                    >
                      <small>Forgot password?</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {Alert(
        validationError,
        openAlert,
        () => setAlert(false),
        "You've logged in successfully!",
      )}
    </>
  );
}
