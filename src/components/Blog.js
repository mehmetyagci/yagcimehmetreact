import React from 'react';

import PostsShort from './PostsShort';
import Pagination from './Pagination';
import Sidebar from './Sidebar';

export default function Blog () {
  return (
    <section>
      <div className="container-fluid grey lighten-4">
        <hr className="my-5" />
        <div className="container">
          {/* Blog */}
          <div className="row mt-5 pt-3">
            {/* Main listing */}
            <div className="col-lg-8 col-12 mt-1 mx-lg-4">

              {/* Section: Blog v.3 */}
              <PostsShort />
              {/* Section: Blog v.3 */}

              {/* Pagination dark grey */}
              <Pagination />
              {/* Pagination dark grey */}
            </div>
            {/* Main listing */}

            {/* Sidebar */}
            <Sidebar />
            {/* Sidebar */}

          </div>
          {/* Blog */}
        </div>
      </div>
    </section>
  );
}
