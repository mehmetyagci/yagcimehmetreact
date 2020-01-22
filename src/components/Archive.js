import React from 'react';

export default function Archive () {
  return (
    <section className="archive mb-5 mt-5">
      {/*  Card */}
      <div className="card card-body pb-0">
        <div className="single-post">
          <p className="font-weight-bold dark-grey-text text-center spacing grey lighten-4 py-2 mb-4">
            <strong>ARCHIVE</strong>
          </p>
          {/* Grid row */}
          <div className="row mb-4">
            {/* Grid column */}
            <div className="col-md-12 text-center">
              {/* List */}
              <ul className="list-unstyled">
                <li>
                  <p className="mb-1">
                    <a href="#!" className="dark-grey-text">
                      August 2016
                    </a>
                  </p>
                </li>
                <li>
                  <p className="mb-1">
                    <a href="#!" className="dark-grey-text">
                      July 2016
                    </a>
                  </p>
                </li>
                <li>
                  <p className="mb-1">
                    <a href="#!" className="dark-grey-text">
                      June 2016
                    </a>
                  </p>
                </li>
                <li>
                  <p className="mb-1">
                    <a href="#!" className="dark-grey-text">
                      May 2016
                    </a>
                  </p>
                </li>
                <li>
                  <p className="mb-1">
                    <a href="#!" className="dark-grey-text">
                      April 2016
                    </a>
                  </p>
                </li>
                <li>
                  <p className="mb-1">
                    <a href="#!" className="dark-grey-text">
                      March 2016
                    </a>
                  </p>
                </li>
                <li>
                  <p className="mb-1">
                    <a href="#!" className="dark-grey-text">
                      Febuary 2016
                    </a>
                  </p>
                </li>
              </ul>
              {/* List */}
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </div>
      {/*  Card */}
    </section>
  );
}
