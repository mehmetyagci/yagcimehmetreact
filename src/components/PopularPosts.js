import React from 'react';

export default function PopularPosts () {
  return (
    <section className="mb-4">
      {/* Grid row */}
      <div className="row mt-4">
        {/* Grid column */}
        <div className="col-md-12 col-lg-12">
          {/* Card */}
          <div className="card text-left mb-3">
            {/* Card image */}
            <div className="view overlay">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/v64KOxKVLVg"
                  allowFullScreen
                />
              </div>
              <a>
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* Card image */}
            {/* Card content */}
            <div className="card-body mx-2">
              {/* Title */}
              <a>
                <h5 className="card-title text-center my-2">
                  <strong>Visit my YouTube channel!</strong>
                </h5>
              </a>
            </div>
            {/* Card content */}
          </div>
          {/* Card */}
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </section>
  );
}
