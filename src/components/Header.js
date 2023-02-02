import React from 'react';
import './styles/main.css';
import logo from './Images/Logo-small.png';
import resume from './Doc/resume.pdf';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header({ currentPage, handlePageChange }) {
  return (
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
      <a href="#" class="d-flex align-items-center justify-content-center text-center col-md-4 col-12 mb-3 mb-lg-0">
        <div class="logo text-center">
          <img src={logo} alt="logo" />
        </div>
      </a>


      <div class="d-flex align-items-center justify-content-center text-center col-md-4 col-12 mb-3 mb-lg-0">
      <ul className="nav nav-pills">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
      </div>

      <div class="col-md-4 d-flex align-items-center justify-content-center text-center">
        <a href={resume} download={resume} class="mybtn text-decoration-none">Download Resume</a>
      </div>

  </header>



  );
}

export default Header;
