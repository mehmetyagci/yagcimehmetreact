import React from 'react';

const imagesPath = process.env.PUBLIC_URL + '/assets/images/';

export default function HeaderImage () {
  return (
    <section>
      <div>
        <img src={`${imagesPath}contact3.jpg`} style={{width: '100%'}} />
      </div>
    </section>
  );
}
