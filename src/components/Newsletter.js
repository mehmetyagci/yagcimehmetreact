import React from 'react';

export default function Newsletter () {
  return (
    <section className="my-5">
      {/*  Card */}
      <div className="card card-body pb-0">
        <div className="single-post">
          <p className="font-weight-bold dark-grey-text text-center spacing grey lighten-4 py-2 mb-4">
            <strong>NEWSLETTER</strong>
          </p>
          {/* Grid row */}
          <div className="row mt-4">
            {/* Grid column */}
            <div className="col-md-12">
              <div className="input-group md-form form-sm form-3 pl-0">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text white black-text"
                    id="basic-addon9"
                  >
                    @
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control mt-0 black-border rgba-white-strong"
                  placeholder="Username"
                  aria-describedby="basic-addon9"
                />
              </div>
              <button type="button" className="btn btn-grey btn-block my-4">
                Sign up
              </button>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </div>
    </section>
  );
}
