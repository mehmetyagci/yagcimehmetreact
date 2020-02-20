import React from 'react';

export default function Post () {
  return (
    <div className="container-fluid mt-md-0 mt-5 mb-5">
      {/* Grid row */}
      <div className="row" style={{marginTop: '-100px'}}>
        {/* Grid column */}
        <div className="col-md-12 px-lg-5">
          {/* Card */}
          <div className="card pb-5 mx-md-3">
            <div className="card-body">
              <div className="container">
                {/* Section heading */}
                <h1 className="text-center h1 pt-4 mb-3">
                  <strong>Title of the post</strong>
                </h1>
                <div className="row">
                  <div className="col-md-12 col-xl-12 d-flex justify-content-center">
                    <p className="font-small dark-grey-text mb-1">
                      <strong>Author:</strong> Jimmy Brown
                    </p>
                    <p className="font-small grey-text mb-0 ml-3">
                      <i className="far fa-clock-o dark-grey-text" />
                      {' '}
                      15/09/2017 at
                      4:03 pm
                    </p>
                  </div>
                </div>
                {/* Grid row */}
                <div className="row pt-lg-5 pt-3">
                  {/* Grid column */}
                  <div className="col-md-12 col-xl-12">
                    <form>
                      {/* Grid row */}
                      <div className="row mt-3">
                        <p className="dark-grey-text article">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit
                          esse cillum dolore eu fugiat nulla pariatur. Excepteur
                          sint occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum.
                        </p>
                        <h4 className="font-weight-bold mt-3 mb-4">
                          <strong>Lorem ipsum dolor sit amet</strong>
                        </h4>
                        <p className="dark-grey-text article">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam rem
                          aperiam, eaque ipsa quae ab illo inventore veritatis et
                          quasi architecto beatae vitae dicta sunt explicabo. Nemo
                          enim ipsam voluptatem quia voluptas sit aspernatur aut
                          odit aut fugit, sed quia consequuntur magni dolores eos
                          qui ratione voluptatem sequi nesciunt. Neque porro
                          quisquam est, qui dolorem ipsum quia dolor sit amet,
                          consectetur, adipisci velit, sed quia non numquam eius
                          modi tempora incidunt ut labore et dolore magnam aliquam
                          quaerat voluptatem.{' '}
                        </p>
                        <blockquote className="blockquote">
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer posuere erat a ante.
                          </p>
                          <footer className="blockquote-footer">
                            Someone famous in
                            <cite title="Source Title">Source Title</cite>
                          </footer>
                        </blockquote>
                        <p className="dark-grey-text article">
                          {' '}
                          Ut enim ad minima veniam, quis nostrum exercitationem
                          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                          commodi consequatur? Quis autem vel eum iure reprehenderit
                          qui in ea voluptate velit esse quam nihil molestiae
                          consequatur, vel illum qui dolorem eum fugiat quo voluptas
                          nulla pariatur.
                        </p>
                      </div>
                      {/* Grid row */}
                      {/* Grid row */}
                      <div className="row mt-3 mb-4">
                        {/* Grid column */}
                        <div className="col-md-4 mb-2">
                          <div className="view zoom z-depth-1">
                            <img
                              src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
                              className="img-fluid rounded-0"
                              alt="sample-image"
                            />
                            <div className="mask flex-center" />
                          </div>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-4 mb-2">
                          <div className="view zoom z-depth-1">
                            <img
                              src="https://mdbootstrap.com/img/Photos/Others/img (41).jpg"
                              className="img-fluid rounded-0 z-depth-1"
                              alt="sample-image"
                            />
                            <div className="mask flex-center" />
                          </div>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-4">
                          <div className="view zoom z-depth-1">
                            <img
                              src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg"
                              className="img-fluid rounded-0 z-depth-1"
                              alt="sample-image"
                            />
                            <div className="mask flex-center" />
                          </div>
                        </div>
                        {/* Grid column */}
                      </div>
                      {/* Grid row */}
                      {/* Grid row */}
                      <div className="row mb-2 mt-4">
                        <p className="dark-grey-text article">
                          Perspiciatis unde omnis iste natus error sit voluptatem
                          accusantium doloremque laudantium, totam rem aperiam,
                          eaque ipsa quae ab illo inventore veritatis et quasi
                          architecto beatae vitae dicta sunt explicabo. Ut enim ad
                          minima veniam, quis nostrum exercitationem ullam corporis
                          suscipit laboriosam, nisi ut aliquid ex ea commodi
                          consequatur? Quis autem vel eum iure reprehenderit qui in
                          ea voluptate velit esse quam nihil molestiae consequatur,
                          vel illum qui dolorem eum fugiat quo voluptas nulla.
                        </p>
                        <li className="dark-grey-text article list-unstyled">
                          <strong>Nulla volutpat aliquam velit:</strong>
                          <ul>
                            <li>Phasellus iaculis neque</li>
                            <li>Purus sodales ultricies</li>
                            <li>Vestibulum laoreet porttitor sem</li>
                            <li>Ac tristique libero volutpat at</li>
                            <li>Vestibulum laoreet porttitor sem</li>
                          </ul>
                        </li>
                        {/* Grid column */}
                        <div className="col-md-12 my-4">
                          <img
                            src="https://mdbootstrap.com/img/Photos/Others/city10.jpg"
                            className="img-fluid z-depth-1 rounded-0"
                            alt="sample image"
                          />
                        </div>
                        {/* Grid column */}
                        <p className="dark-grey-text article">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam rem
                          aperiam, eaque ipsa quae ab illo inventore veritatis et
                          quasi architecto beatae vitae dicta sunt explicabo. Nemo
                          enim ipsam voluptatem quia voluptas sit aspernatur ut
                          perspiciatis unde omnis iste natus error sit voluptatem
                          accusantium doloremque laudantium, totam rem aperiam,
                          eaque ipsa quae ab illo inventore veritatis et quasi
                          architecto beatae vitae dicta sunt explicabo. Nemo enim
                          ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                          fugit, sed quia consequuntur magni dolores eos qui ratione
                          voluptatem sequi nesciunt. Neque porro quisquam est, qui
                          dolorem ipsum quia dolor sit amet, consectetur, adipisci
                          velit, sed quia non numquam eius modi tempora incidunt ut
                          labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                      </div>
                      {/* Grid row */}
                      {/* Grid row */}
                      <div className="row my-5">
                        {/* Grid column */}
                        <div className="col-md-12 text-center">
                          <h4 className="text-center font-weight-bold dark-grey-text mt-3 mb-3">
                            <strong>Share this post: </strong>
                          </h4>
                          <button type="button" className="btn btn-fb btn-sm">
                            <i className="fab fa-facebook-f left" /> Facebook
                          </button>
                          {/* Twitter */}
                          <button type="button" className="btn btn-tw btn-sm">
                            <i className="fab fa-twitter left" /> Twitter
                          </button>
                          {/* Google + */}
                          <button
                            type="button"
                            className="btn btn-gplus btn-sm"
                          >
                            <i className="fab fa-google-plus-g left" /> Google +
                          </button>
                        </div>
                        {/* Grid column */}
                      </div>
                      {/* Grid row */}
                      <hr className="mt-5" />
                      {/* Comments */}
                      <section>
                        {/* Main wrapper */}
                        <div className="comments-list text-center text-md-left">
                          <div className="text-center my-5">
                            <h3 className="font-weight-bold">
                              Comments
                              <span className="badge indigo">3</span>
                            </h3>
                          </div>
                          {/* First row */}
                          <div className="row mb-5">
                            {/* Image column */}
                            <div className="col-sm-2 col-12 mb-3">
                              <img
                                src="https://mdbootstrap.com/img/Photos/Avatars/img (8).jpg"
                                className="avatar rounded-circle z-depth-1-half"
                                alt="sample image"
                              />
                            </div>
                            {/* Image column */}
                            {/* Content column */}
                            <div className="col-sm-10 col-12">
                              <a>
                                <h5 className="user-name font-weight-bold">
                                  John Doe
                                </h5>
                              </a>
                              <div className="card-data">
                                <ul className="list-unstyled">
                                  <li className="comment-date font-small">
                                    <i className="far fa-clock-o" /> 05/10/2015
                                  </li>
                                </ul>
                              </div>
                              <p className="dark-grey-text article">
                                Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non
                                proident.
                              </p>
                            </div>
                            {/* Content column */}
                          </div>
                          {/* First row */}
                          {/* Second row */}
                          <div className="row mb-5">
                            {/* Image column */}
                            <div className="col-sm-2 col-12 mb-3">
                              <img
                                src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg"
                                className="avatar rounded-circle z-depth-1-half"
                                alt="sample image"
                              />
                            </div>
                            {/* Image column */}
                            {/* Content column */}
                            <div className="col-sm-10 col-12 mb-3">
                              <a>
                                <h5 className="user-name font-weight-bold">
                                  Lily Brown
                                </h5>
                              </a>
                              <div className="card-data">
                                <ul className="list-unstyled">
                                  <li className="comment-date font-small">
                                    <i className="far fa-clock-o" /> 05/10/2015
                                  </li>
                                </ul>
                              </div>
                              <p className="dark-grey-text article">
                                Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non
                                proident.
                              </p>
                            </div>
                            {/* Content column */}
                          </div>
                          {/* Second row */}
                          {/* Third row */}
                          <div className="row mb-5">
                            {/* Image column */}
                            <div className="col-sm-2 col-12 mb-3">
                              <img
                                src="https://mdbootstrap.com/img/Photos/Avatars/img (28).jpg"
                                className="avatar rounded-circle z-depth-1-half"
                                alt="sample image"
                              />
                            </div>
                            {/* Image column */}
                            {/* Content column */}
                            <div className="col-sm-10 col-12">
                              <a>
                                <h5 className="user-name font-weight-bold">
                                  Martha Smith
                                </h5>
                              </a>
                              <div className="card-data">
                                <ul className="list-unstyled">
                                  <li className="comment-date font-small">
                                    <i className="far fa-clock-o" /> 05/10/2015
                                  </li>
                                </ul>
                              </div>
                              <p className="dark-grey-text article">
                                Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non
                                proident.
                              </p>
                            </div>
                            {/* Content column */}
                          </div>
                          {/* Third row */}
                        </div>
                        {/* Main wrapper */}
                      </section>
                      {/* Comments */}
                      <hr />
                      {/* Section: Leave a reply (Not Logged In User) */}
                      <section
                        className="mb-4 wow fadeIn"
                        data-wow-delay="0.2s"
                      >
                        <h3 className="font-weight-bold text-center my-5">
                          Leave a reply
                        </h3>
                        {/* Grid row */}
                        <div className="row">
                          {/* Grid column */}
                          <div className="col-lg-4 col-md-12 mb-4">
                            <div className="input-group md-form form-sm form-3 pl-0">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text white black-text"
                                  id="basic-addon8"
                                >
                                  1
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control mt-0 black-border rgba-white-strong"
                                placeholder="Name"
                                aria-describedby="basic-addon9"
                              />
                            </div>
                          </div>
                          {/* Grid column */}
                          {/* Grid column */}
                          <div className="col-lg-4 col-md-6 mb-4">
                            <div className="input-group md-form form-sm form-3 pl-0">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text white black-text"
                                  id="basic-addon9"
                                >
                                  2
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control mt-0 black-border rgba-white-strong"
                                placeholder="Email"
                                aria-describedby="basic-addon9"
                              />
                            </div>
                          </div>
                          {/* Grid column */}
                          {/* Grid column */}
                          <div className="col-lg-4 col-md-6 mb-4">
                            <div className="input-group md-form form-sm form-3 pl-0">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text white black-text"
                                  id="basic-addon10"
                                >
                                  3
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control mt-0 black-border rgba-white-strong"
                                placeholder="Website"
                                aria-describedby="basic-addon9"
                              />
                            </div>
                          </div>
                          {/* Grid column */}
                        </div>
                        {/* Grid row */}
                        {/* Grid row */}
                        <div className="row">
                          <div className="col-12 mt-1">
                            <div className="form-group basic-textarea">
                              <textarea
                                className="form-control"
                                id="exampleFormControlTextarea6"
                                rows={5}
                                placeholder="Write something here..."
                                defaultValue={''}
                              />
                            </div>
                            <div className="text-right">
                              <button className="btn btn-grey btn-sm">
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* Grid row */}
                      </section>
                      {/* Section: Leave a reply (Not Logged In User) */}
                      {/* Posts */}
                      <section className="text-left mt-4">
                        <h4 className="font-weight-bold mt-5 mb-5 text-center">
                          <strong>Latest news</strong>
                        </h4>
                        {/* Carousel Wrapper */}
                        <div
                          id="multi-item-example"
                          className="carousel slide carousel-multi-item mx-1"
                          data-ride="carousel"
                        >
                          {/* Indicators */}
                          <ol className="carousel-indicators">
                            <li
                              data-target="#multi-item-example"
                              data-slide-to={0}
                              className="active"
                            />
                            <li
                              data-target="#multi-item-example"
                              data-slide-to={1}
                            />
                            <li
                              data-target="#multi-item-example"
                              data-slide-to={2}
                            />
                          </ol>
                          {/* Indicators */}
                          {/* Slides */}
                          <div className="carousel-inner" role="listbox">
                            {/* First slide */}
                            <div className="carousel-item active">
                              {/* Grid row */}
                              <div className="row mb-4 mx-1">
                                {/* Grid column */}
                                <div className="col-lg-4 my-3">
                                  {/* Card */}
                                  <div className="card">
                                    {/* Card image */}
                                    <div className="view overlay">
                                      <img
                                        src="https://mdbootstrap.com/img/Photos/Others/img(40).jpg"
                                        className="card-img-top"
                                        alt="sample image"
                                      />
                                      <a>
                                        <div className="mask rgba-white-slight" />
                                      </a>
                                    </div>
                                    {/* Card image */}
                                    {/* Card content */}
                                    <div className="card-body">
                                      {/* Title */}
                                      <h4 className="card-title">
                                        <strong>Card title</strong>
                                      </h4>
                                      <hr />
                                      <p />

                                      <div className="row">
                                        <div className="col">

                                          <p className="font-small font-weight-bold dark-grey-text mb-1">
                                            <i className="far fa-clock-o" />
                                            {' '}
                                            11/11/2020
                                          </p>

                                        </div>
                                        {/*<div className="col">
     
                                      <p className="font-small grey-text mb-0">
                                        Anna Smith
                                      </p>
                                        
                                        </div>
                                        */}
                                        <div class="col">

                                          <p className="text-right mb-0 font-small font-weight-bold">
                                            <a>
                                              read more
                                              <i className="fas fa-angle-right" />
                                            </a>
                                          </p>

                                        </div>
                                      </div>

                                    </div>
                                    {/* Card content */}
                                  </div>
                                  {/* Card */}
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-lg-4 text-left mt-3">
                                  {/* Card */}
                                  <div className="card">
                                    {/* Card image */}
                                    <div className="view overlay">
                                      <img
                                        src="https://mdbootstrap.com/img/Photos/Others/img(45).jpg"
                                        className="card-img-top"
                                        alt="sample image"
                                      />
                                      <a>
                                        <div className="mask rgba-white-slight" />
                                      </a>
                                    </div>
                                    {/* Card image */}
                                    {/* Card content */}
                                    <div className="card-body">
                                      {/* Title */}
                                      <h4 className="card-title">
                                        <strong>Card title</strong>
                                      </h4>
                                      <hr />
                                      <p className="font-small font-weight-bold dark-grey-text mb-1">
                                        <i className="far fa-clock-o" />
                                        {' '}
                                        27/08/2017
                                      </p>
                                      <p className="font-small grey-text mb-0">
                                        Anna Smith
                                      </p>
                                      <p className="text-right mb-0 font-small font-weight-bold">
                                        <a>
                                          read more
                                          <i className="fas fa-angle-right" />
                                        </a>
                                      </p>
                                    </div>
                                    {/* Card content */}
                                  </div>
                                  {/* Card */}
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-lg-4 text-left mt-3">
                                  {/* Card */}
                                  <div className="card">
                                    {/* Card image */}
                                    <div className="view overlay">
                                      <img
                                        src="https://mdbootstrap.com/img/Photos/Others/img (35).jpg"
                                        className="card-img-top"
                                        alt="sample image"
                                      />
                                      <a>
                                        <div className="mask rgba-white-slight" />
                                      </a>
                                    </div>
                                    {/* Card image */}
                                    {/* Card content */}
                                    <div className="card-body">
                                      {/* Title */}
                                      <h4 className="card-title">
                                        <strong>Card title</strong>
                                      </h4>
                                      <hr />
                                      <p className="font-small font-weight-bold dark-grey-text mb-1">
                                        <i className="far fa-clock-o" />
                                        {' '}
                                        27/08/2017
                                      </p>
                                      <p className="font-small grey-text mb-0">
                                        Anna Smith
                                      </p>
                                      <p className="text-right mb-0 font-small font-weight-bold">
                                        <a>
                                          read more
                                          <i className="fas fa-angle-right" />
                                        </a>
                                      </p>
                                    </div>
                                    {/* Card content */}
                                  </div>
                                  {/* Card */}
                                </div>
                                {/* Grid column */}
                              </div>
                              {/* Grid row */}
                            </div>
                            {/* First slide */}
                            {/* Second slide */}
                            <div className="carousel-item">
                              {/* Grid row */}
                              <div className="row mb-4 mx-1">
                                {/* Grid column */}
                                <div className="col-lg-4 my-3">
                                  {/* Card */}
                                  <div className="card">
                                    {/* Card image */}
                                    <div className="view overlay">
                                      <img
                                        src="https://mdbootstrap.com/img/Photos/Others/img (43).jpg"
                                        className="card-img-top"
                                        alt="sample image"
                                      />
                                      <a>
                                        <div className="mask rgba-white-slight" />
                                      </a>
                                    </div>
                                    {/* Card image */}
                                    {/* Card content */}
                                    <div className="card-body">
                                      {/* Title */}
                                      <h4 className="card-title">
                                        <strong>Card title</strong>
                                      </h4>
                                      <hr />
                                      <p />
                                      <p className="font-small font-weight-bold dark-grey-text mb-1">
                                        <i className="far fa-clock-o" />
                                        {' '}
                                        27/08/2017
                                      </p>
                                      <p className="font-small grey-text mb-0">
                                        Anna Smith
                                      </p>
                                      <p className="text-right mb-0 font-small font-weight-bold">
                                        <a>
                                          read more
                                          <i className="fas fa-angle-right" />
                                        </a>
                                      </p>
                                    </div>
                                    {/* Card content */}
                                  </div>
                                  {/* Card */}
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-lg-4 text-left mt-3">
                                  {/* Card */}
                                  <div className="card">
                                    {/* Card image */}
                                    <div className="view overlay">
                                      <img
                                        src="https://mdbootstrap.com/img/Photos/Others/img (39).jpg"
                                        className="card-img-top"
                                        alt="sample image"
                                      />
                                      <a>
                                        <div className="mask rgba-white-slight" />
                                      </a>
                                    </div>
                                    {/* Card image */}
                                    {/* Card content */}
                                    <div className="card-body">
                                      {/* Title */}
                                      <h4 className="card-title">
                                        <strong>Card title</strong>
                                      </h4>
                                      <hr />
                                      <p className="font-small font-weight-bold dark-grey-text mb-1">
                                        <i className="far fa-clock-o" />
                                        {' '}
                                        27/08/2017
                                      </p>
                                      <p className="font-small grey-text mb-0">
                                        Anna Smith
                                      </p>
                                      <p className="text-right mb-0 font-small font-weight-bold">
                                        <a>
                                          read more
                                          <i className="fas fa-angle-right" />
                                        </a>
                                      </p>
                                    </div>
                                    {/* Card content */}
                                  </div>
                                  {/* Card */}
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-lg-4 text-left mt-3">
                                  {/* Card */}
                                  <div className="card">
                                    {/* Card image */}
                                    <div className="view overlay">
                                      <img
                                        src="https://mdbootstrap.com/img/Photos/Others/img (46).jpg"
                                        className="card-img-top"
                                        alt="sample image"
                                      />
                                      <a>
                                        <div className="mask rgba-white-slight" />
                                      </a>
                                    </div>
                                    {/* Card image */}
                                    {/* Card content */}
                                    <div className="card-body">
                                      {/* Title */}
                                      <h4 className="card-title">
                                        <strong>Card title</strong>
                                      </h4>
                                      <hr />
                                      <p className="font-small font-weight-bold dark-grey-text mb-1">
                                        <i className="far fa-clock-o" />
                                        {' '}
                                        27/08/2017
                                      </p>
                                      <p className="font-small grey-text mb-0">
                                        Anna Smith
                                      </p>
                                      <p className="text-right mb-0 font-small font-weight-bold">
                                        <a>
                                          read more
                                          <i className="fas fa-angle-right" />
                                        </a>
                                      </p>
                                    </div>
                                    {/* Card content */}
                                  </div>
                                  {/* Card */}
                                </div>
                                {/* Grid column */}
                              </div>
                              {/* Grid row */}
                            </div>
                            {/* Second slide */}
                            {/* Third slide */}
                            <div className="carousel-item">
                              {/* Grid row */}
                              <div className="row mb-4 mx-1">
                                {/* Grid column */}
                                <div className="col-lg-4 my-3">
                                  {/* Card */}
                                  <div className="card">
                                    {/* Card image */}
                                    <div className="view overlay">
                                      <img
                                        src="https://mdbootstrap.com/img/Photos/Others/img (30).jpg"
                                        className="card-img-top"
                                        alt="sample image"
                                      />
                                      <a>
                                        <div className="mask rgba-white-slight" />
                                      </a>
                                    </div>
                                    {/* Card image */}
                                    {/* Card content */}
                                    <div className="card-body">
                                      {/* Title */}
                                      <h4 className="card-title">
                                        <strong>Card title</strong>
                                      </h4>
                                      <hr />
                                      <p />
                                      <p className="font-small font-weight-bold dark-grey-text mb-1">
                                        <i className="far fa-clock-o" />
                                        {' '}
                                        27/08/2017
                                      </p>
                                      <p className="font-small grey-text mb-0">
                                        Anna Smith
                                      </p>
                                      <p className="text-right mb-0 font-small font-weight-bold">
                                        <a>
                                          read more
                                          <i className="fas fa-angle-right" />
                                        </a>
                                      </p>
                                    </div>
                                    {/* Card content */}
                                  </div>
                                  {/* Card */}
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-lg-4 text-left mt-3">
                                  {/* Card */}
                                  <div className="card">
                                    {/* Card image */}
                                    <div className="view overlay">
                                      <img
                                        src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
                                        className="card-img-top"
                                        alt="sample image"
                                      />
                                      <a>
                                        <div className="mask rgba-white-slight" />
                                      </a>
                                    </div>
                                    {/* Card image */}
                                    {/* Card content */}
                                    <div className="card-body">
                                      {/* Title */}
                                      <h4 className="card-title">
                                        <strong>Card title</strong>
                                      </h4>
                                      <hr />
                                      <p className="font-small font-weight-bold dark-grey-text mb-1">
                                        <i className="far fa-clock-o" />
                                        {' '}
                                        27/08/2017
                                      </p>
                                      <p className="font-small grey-text mb-0">
                                        Anna Smith
                                      </p>
                                      <p className="text-right mb-0 font-small font-weight-bold">
                                        <a>
                                          read more
                                          <i className="fas fa-angle-right" />
                                        </a>
                                      </p>
                                    </div>
                                    {/* Card content */}
                                  </div>
                                  {/* Card */}
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-lg-4 text-left mt-3">
                                  {/* Card */}
                                  <div className="card">
                                    {/* Card image */}
                                    <div className="view overlay">
                                      <img
                                        src="https://mdbootstrap.com/img/Photos/Others/img (33).jpg"
                                        className="card-img-top"
                                        alt="sample image"
                                      />
                                      <a>
                                        <div className="mask rgba-white-slight" />
                                      </a>
                                    </div>
                                    {/* Card image */}
                                    {/* Card content */}
                                    <div className="card-body">
                                      {/* Title */}
                                      <h4 className="card-title">
                                        <strong>Card title</strong>
                                      </h4>
                                      <hr />
                                      <p className="font-small font-weight-bold dark-grey-text mb-1">
                                        <i className="far fa-clock-o" />
                                        {' '}
                                        27/08/2017
                                      </p>
                                      <p className="font-small grey-text mb-0">
                                        Anna Smith
                                      </p>
                                      <p className="text-right mb-0 font-small font-weight-bold">
                                        <a>
                                          read more
                                          <i className="fas fa-angle-right" />
                                        </a>
                                      </p>
                                    </div>
                                    {/* Card content */}
                                  </div>
                                  {/* Card */}
                                </div>
                                {/* Grid column */}
                              </div>
                              {/* Grid row */}
                            </div>
                            {/* Third slide */}
                          </div>
                          {/* Slides */}
                        </div>
                        {/* Carousel Wrapper */}
                      </section>
                      {/* Posts */}
                    </form>
                  </div>
                  {/* Grid column */}
                </div>
                {/* Grid row */}
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
          {/* Card */}
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  );
}
