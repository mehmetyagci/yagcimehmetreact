import React from 'react';

export default function Categories () {
  return (
    <section className="section mb-5">
      {/* Card */}
      <div className="card card-body pb-0">
        <div className="single-post">
          <p className="font-weight-bold dark-grey-text text-center spacing grey lighten-4 py-2 mb-4">
            <strong>CATEGORIES</strong>
          </p>
          <ul className="list-group my-4">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>
                <p className="mb-0">Travel</p>
              </a>
              <span className="badge teal badge-pill font-small">
                4
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>
                <p className="mb-0">Lifestyle</p>
              </a>
              <span className="badge teal badge-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>
                <p className="mb-0">Photography</p>
              </a>
              <span className="badge teal badge-pill">1</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>
                <p className="mb-0">Culinary</p>
              </a>
              <span className="badge teal badge-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>
                <p className="mb-0">Fashion</p>
              </a>
              <span className="badge teal badge-pill">1</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>
                <p className="mb-0">Work</p>
              </a>
              <span className="badge teal badge-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>
                <p className="mb-0">Business</p>
              </a>
              <span className="badge teal badge-pill">5</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
