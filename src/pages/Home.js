import React, {Component} from 'react';

import Blog from '../components/Blog';

class Home extends Component {
  componentWillMount () {
    document.getElementById ('root').className = 'homepage-v1';
  }

  componentWillUnmount () {
    document.getElementById ('root').className = '';
  }

  render () {
    return (
      <main>
        <Blog />
      </main>
    );
  }
}

export default Home;
