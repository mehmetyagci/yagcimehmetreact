import React from 'react';

import FeaturedPosts from './FeaturedPosts';
import Archive from './Archive';
import Categories from './Categories';
import Careousel from './Careousel';

export default function Sidebar () {
  return (
    <div className="col-lg-3 col-12 mt-1">

      {/* Section: Featured posts */}
      <FeaturedPosts />
      {/*  Section: Featured posts */}

      {/* Archive */}
      <Archive />
      {/* Archive */}

      {/* Section: Categories */}
      <Categories />
      {/* Section: Categories */}

      {/* Featured posts Careousel */}
      <Careousel />
      {/* Featured posts Careousel */}
    </div>
  );
}
