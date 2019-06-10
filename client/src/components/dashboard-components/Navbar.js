import React from 'react';
import './main.css'

function NavbarTabs(props) {
  return (

    <nav className="navbar custom-nav navbar-expand-lg row">
      <div className="navbar-brand diginote-font">DigiNote<i className="fas fa-pencil-alt fa-sm"></i></div>
      <ul className="nav nav-pills mr-auto">
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
      <button className="btn btn-secondary ml-auto" onClick={props.logoutOnClick}>Log Out</button>

    </nav>
  );
}

export default NavbarTabs;