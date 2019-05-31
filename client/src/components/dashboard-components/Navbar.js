import React from 'react';

function NavbarTabs(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-brand">Welcome, User</div>
      <ul className="nav nav-pills justify-content-end">
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