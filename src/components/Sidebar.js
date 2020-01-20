import React from 'react';

import FeaturedPosts from './FeaturedPosts';
import Newsletter from './Newsletter';
import Archive from './Archive';
import PopularPosts from './PopularPosts';
import Categories from './Categories';
import AboutShort from './AboutShort';
import Careousel from './Careousel';

export default function Sidebar () {
  return (
    <div className="col-lg-3 col-12 mt-1">

      {/* Card */}
      <AboutShort />
      {/* Card */}

      {/* Section: Featured posts */}
      <FeaturedPosts />
      {/*  Section: Featured posts */}

      {/* Newsletter */}
      <Newsletter />
      {/* Newsletter */}

      {/* Archive */}
      <Archive />
      {/* Archive */}

      {/* Popular posts */}
      <PopularPosts />
      {/* Popular posts */}

      {/* Section: Categories */}
      <Categories />
      {/* Section: Categories */}

      {/* Featured posts Careousel */}
      <Careousel />
      {/* Featured posts Careousel */}
    </div>
  );
}
