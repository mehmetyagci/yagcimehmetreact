import React from 'react';

export default function NavBar () {
  return (
    /*  Navbar start */
    (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light scrolling-navbar white">
        <div className="container-fluid justify-content-center align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-4"
            aria-controls="navbarSupportedContent-4"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent-4"
          >
            <ul className="navbar-nav">
              <li className="nav-item ml-4 mb-0">
                <a
                  className="nav-link waves-effect waves-light font-weight-bold"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {' '}
                  HOMEPAGE
                </a>
               
              </li>
              <li className="nav-item dropdown ml-4  mb-0">
                <a
                  className="nav-link dropdown-toggle waves-effect waves-light font-weight-bold"
                  id="navbarDropdownMenuLink-2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {' '}
                  POST PAGE{' '}
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdownMenuLink-2"
                >
                  <a
                    className="dropdown-item waves-effect waves-light"
                    href="../postpage/v-1.html"
                  >
                    V1
                  </a>
                  <a
                    className="dropdown-item waves-effect waves-light"
                    href="../postpage/v-2.html"
                  >
                    V2
                  </a>
                  <a
                    className="dropdown-item waves-effect waves-light"
                    href="../postpage/v-3.html"
                  >
                    V3
                  </a>
                  <a
                    className="dropdown-item waves-effect waves-light"
                    href="../postpage/v-4.html"
                  >
                    V4
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown ml-4  mb-0">
                <a
                  href="#"
                  className="nav-link dropdown-toggle waves-effect waves-light font-weight-bold"
                  id="navbarDropdownMenuLink-4"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  ABOUT
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdownMenuLink-4"
                >
                  <a
                    className="dropdown-item waves-effect waves-light"
                    href="../author page/v-1.html"
                  >
                    V1
                  </a>
                  <a
                    className="dropdown-item waves-effect waves-light"
                    href="../author page/v-2.html"
                  >
                    V2
                  </a>
                  <a
                    className="dropdown-item waves-effect waves-light"
                    href="../author page/v-3.html"
                  >
                    V3
                  </a>
                </div>
              </li>
              <li className="nav-item ml-4 mb-0">
                <a
                  className="nav-link waves-effect waves-light font-weight-bold"
                  href="#"
                >
                  CONTACT
                  <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav ml-auto nav-flex-icons">
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light">
                <i className="fab fa-google-plus-g" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
    /* Navbar end */
  );
}
