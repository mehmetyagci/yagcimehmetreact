import React from 'react';

export default function Pagination () {
  return (
    <nav className="mb-5 pb-2">
      <ul className="pagination pg-darkgrey flex-center">
        {/* Arrow left */}
        <li className="page-item">
          <a className="page-link" aria-label="Previous">
            <span aria-hidden="true">«</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        {/* Numbers */}
        <li className="page-item active">
          <a className="page-link">1</a>
        </li>
        <li className="page-item">
          <a className="page-link">2</a>
        </li>
        <li className="page-item">
          <a className="page-link">3</a>
        </li>
        <li className="page-item">
          <a className="page-link">4</a>
        </li>
        <li className="page-item">
          <a className="page-link">5</a>
        </li>
        {/* Arrow right */}
        <li className="page-item">
          <a className="page-link" aria-label="Next">
            <span aria-hidden="true">»</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
