import React from 'react';

export default function Footer () {
  return (
    <footer className="page-footer stylish-color mt-0 pt-0 text-center text-md-left">
      {/* Footer Links */}
      <div className="container">
        {/* First row */}
        <div className="row">
          {/* First column */}
          <div className="col-md-12 py-4">
            <div className="footer-socials mb-5 flex-center">
              {/* Facebook */}
              <a className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-lg">
                  {' '}
                </i>
              </a>
              {/* Twitter */}
              <a className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-lg">
                  {' '}
                </i>
              </a>
              {/* Google + */}
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-lg">
                  {' '}
                </i>
              </a>
              {/* Linkedin */}
              <a className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-lg">
                  {' '}
                </i>
              </a>
              {/* Instagram */}
              <a className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-lg">
                  {' '}
                </i>
              </a>
              {/* Pinterest */}
              <a className="pin-ic">
                <i className="fab fa-pinterest fa-lg white-text fa-lg"> </i>
              </a>
            </div>
          </div>
          {/* First column */}
        </div>
        {/* First row */}
      </div>
      {/* Footer Links */}
      {/* Copyright */}
      <div className="footer-copyright text-center py-3">
        <div className="container-fluid">
          © 2020 Copyright:{' '}
          <a href="http://yagcimehmet.com/" target="_blank">
            {' '}
            yagcimehmet.com{' '}
          </a>
        </div>
      </div>
      {/* Copyright */}
    </footer>
  );
}
