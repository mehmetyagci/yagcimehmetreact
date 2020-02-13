import React from 'react';

export default function About () {
  {
    /* Main Layout */
  }
  return (
    <main>
      <div className="container-fluid mt-md-0 mt-5 mb-5">
        {/* Grid row */}
        <div className="row" style={{marginTop: '-75px'}}>
          {/* Grid column */}
          <div className="col-md-12 px-lg-5">
            {/* Card */}
            <div className="card pb-5 mx-md-3">
              <div className="card-body">
                <div className="container">
                  {/* Section heading */}
                  <h1 className="text-center h1 pt-4 mb-3">
                    <strong>About me</strong>
                  </h1>
                  {/* Grid row */}
                  <div className="row pt-lg-5 pt-3">
                    {/* Grid column */}
                    <div className="col-md-4 mb-3">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Others/model1.jpg"
                        className="img-fluid z-depth-1"
                      />
                    </div>
                    {/* Grid column */}
                    {/* Grid column */}
                    <div className="col-md-7 ml-xl-5">
                      <form>
                        {/* Grid row */}
                        <div className="row">
                          <p className="dark-grey-text article">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos qui ratione voluptatem.
                            {' '}
                          </p>
                          <blockquote className="blockquote">
                            <p className="mb-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                              erat a ante.
                            </p>
                            <footer className="blockquote-footer">
                              Someone famous in
                              <cite title="Source Title">Source Title</cite>
                            </footer>
                          </blockquote>
                          <p className="dark-grey-text article">
                            {' '}
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam
                            corporis suscipit
                            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel
                            eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                          </p>
                        </div>
                        {/* Grid row */}
                        {/* Grid row */}
                        <div className="row mb-2 mt-2">
                          <li className="dark-grey-text article list-unstyled">
                            <strong>Nulla volutpat aliquam velit:</strong>
                            <ul>
                              <li>Phasellus iaculis neque</li>
                              <li>Purus sodales ultricies</li>
                              <li>Vestibulum laoreet porttitor sem</li>
                              <li>Ac tristique libero volutpat at</li>
                            </ul>
                          </li>
                        </div>
                        {/* Grid column */}
                      </form>
                    </div>
                    {/* Grid Column */}
                  </div>
                </div>
              </div>
              {/* Card */}
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </div>
    </main>
  );
  {
    /* Main Layout */
  }
}
