import React from 'react';

export default function Intro () {
  return (
    <section>
      <div className="container-fluid">
        {/* Excerpt */}
        <br />
        <h1 className="text-center dark-grey-text pb-3 mt-5 pt-5">
          <strong>ANNA'S</strong> BLOG
        </h1>
        <p className="grey-text text-center mb-4 text-uppercase spacing">
          Welcome on my blog.{' '}
        </p>
        {/* Grid row */}
        <div className="row flex-center">
          {/* Grid column */}
          <div className="col-md-10 col-xl-5">
            <p className="grey-text text-center">
              <em>
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores.Nemo enim ipsam voluptatem quia voluptas. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur."
              </em>
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
  );
}
