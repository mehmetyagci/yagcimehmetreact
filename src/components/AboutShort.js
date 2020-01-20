import React from 'react';

export default function AboutShort () {
  return (
    <div className="card">
      {/* Card image */}
      <div className="view overlay">
        <img
          src="https://mdbootstrap.com/img/Photos/Others/images/20.jpg"
          className="card-img-top"
          alt=""
        />
        <a>
          <div className="mask rgba-white-slight" />
        </a>
      </div>
      {/* Card image */}
      {/* Card content */}
      <div className="card-body">
        {/* Title */}
        <h5 className="card-title dark-grey-text text-center grey lighten-4 py-2">
          <strong>Anna Doe</strong>
        </h5>
        {/* Description */}
        <p className="mt-3 dark-grey-text font-small text-center">
          <em>
            Hello, I'm Anna. I love travel around the world and take photos of landscapes and
            local people.
          </em>
        </p>
        <ul className="list-unstyled list-inline-item circle-icons list-unstyled flex-center">
          {/* Facebook */}
          <li>
            <a className="fb-ic">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          {/* Twitter */}
          <li>
            <a className="tw-ic">
              <i className="fab fa-twitter mx-3"> </i>
            </a>
          </li>
          {/* Google + */}
          <li>
            <a className="gplus-ic">
              <i className="fab fa-google-plus-g"> </i>
            </a>
          </li>
        </ul>
      </div>
      {/* Card content */}
    </div>
  );
}
