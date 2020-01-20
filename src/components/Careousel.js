import React from 'react';

export default function Careousel () {
  return (
    <section className="mb-5">
      {/* Grid row */}
      <div className="row mt-4">
        {/* Grid column */}
        <div className="col-md-12">
          {/* Carousel Wrapper */}
          <div
            id="carousel-example-4"
            className="carousel slide carousel-fade z-depth-1-half"
            data-ride="carousel"
          >
            {/* Indicators */}
            <ol className="carousel-indicators">
              <li
                data-target="#carousel-example-4"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carousel-example-4" data-slide-to={1} />
              <li data-target="#carousel-example-4" data-slide-to={2} />
            </ol>
            {/* Indicators */}
            {/* Slides */}
            <div className="carousel-inner" role="listbox">
              {/* First slide */}
              <div className="carousel-item active">
                {/* Mask color */}
                <div className="view">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(126).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <a href="#!">
                    <div className="mask flex-center rgba-stylish-strong" />
                  </a>
                </div>
                {/* Caption */}
                <div className="carousel-caption">
                  <div className="animated fadeInDown">
                    <h4 className="h4-responsive">
                      <a href="#!" className="white-text font-weight-bold">
                        Your health
                      </a>
                    </h4>
                    <p>
                      <a href="#!" className="white-text">
                        Lorem ipsum
                      </a>
                    </p>
                  </div>
                </div>
                {/* Caption */}
              </div>
              {/* First slide */}
              {/* Second slide */}
              <div className="carousel-item">
                {/* Mask color */}
                <div className="view">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(128).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <a href="#!">
                    <div className="mask flex-center rgba-black-light" />
                  </a>
                </div>
                {/* Caption */}
                <div className="carousel-caption">
                  <div className="animated fadeInDown">
                    <h4 className="h4-responsive">
                      <a href="#!" className="white-text font-weight-bold">
                        News title
                      </a>
                    </h4>
                    <p>
                      <a href="#!" className="white-text">
                        Lorem ipsum
                      </a>
                    </p>
                  </div>
                </div>
                {/* Caption */}
              </div>
              {/* Second slide */}
              {/* Third slide */}
              <div className="carousel-item">
                {/* Mask color */}
                <div className="view">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(133).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <a href="#!">
                    <div className="mask flex-center rgba-black-light" />
                  </a>
                </div>
                {/* Caption */}
                <div className="carousel-caption">
                  <div className="animated fadeInDown">
                    <h4 className="h4-responsive">
                      <a href="#!" className="white-text font-weight-bold">
                        News title
                      </a>
                    </h4>
                    <p>
                      <a href="#!" className="white-text">
                        Lorem ipsum
                      </a>
                    </p>
                  </div>
                </div>
                {/* Caption */}
              </div>
              {/* Third slide */}
            </div>
            {/* Slides */}
            {/* Controls */}
            <a
              className="carousel-control-prev"
              href="#carousel-example-4"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carousel-example-4"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
            {/* Controls */}
          </div>
          {/* Carousel Wrapper */}
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </section>
  );
}
