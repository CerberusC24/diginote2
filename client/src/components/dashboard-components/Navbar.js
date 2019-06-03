import React from 'react';

function NavbarTabs(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light row">
      <div className="navbar-brand">Welcome, User</div>
      <button className="btn btn-danger">Log Out</button>
      <ul className="nav nav-pills ml-auto">
        <li className="nav-item">
          <a href="#notes" onClick={() => props.handlePageChange("Notes")} className={`nav-link ${props.currentPage === 'Notes' ? 'active' : ''}`}>
            Home
        </a>
        </li>
        <li className="nav-item">
          <a href="#media" onClick={() => props.handlePageChange("Media")} className={`nav-link ${props.currentPage === 'Media' ? 'active' : ''}`}>
            Media
        </a>
        </li>
      </ul>

    </nav>
  );
}

export default NavbarTabs;