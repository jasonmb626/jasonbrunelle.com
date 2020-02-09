import React from 'react';
import { NavLink } from 'react-router-dom';
import resume from '../resources/Jason Brunelle Resume.docx';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container-fluid'>
        <div className='navbar-brand mr-auto'>
          Jason Brunelle, Web Developer
        </div>
        <button
          className='navbar-toggler'
          data-toggle='collapse'
          data-target='#navbarCollapse'
          aria-controls='navbarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <ul className='navbar-nav mr-1 ml-auto text-right'>
            <li className='nav-item'>
              <NavLink to='/' exact className='nav-link'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/about' className='nav-link'>
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/portfolio' className='nav-link'>
                Portfolio
              </NavLink>
            </li>
            <li className='nav-item'>
              <a
                href={resume}
                target='_blank'
                rel='noopener noreferrer'
                className='nav-link'
              >
                <span className='d-inline d-lg-none'>Resume </span>
                <i className='far fa-file-pdf' />
                <span className='d-none d-lg-inline'> Resume</span>
              </a>
            </li>

            <li className='nav-item'>
              <a
                href='https://github.com/jasonmb626'
                target='_blank'
                rel='noopener noreferrer'
                className='nav-link'
              >
                <span className='d-inline d-lg-none'>Github </span>
                <i className='fab fa-github' />
                <span className='d-none d-lg-inline'> Github</span>
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='https://www.linkedin.com/in/jason-brunelle-18b6bb177/'
                target='_blank'
                rel='noopener noreferrer'
                className='nav-link'
              >
                <span className='d-inline d-lg-none'>LinkedIn </span>
                <i className='fab fa-linkedin' />
                <span className='d-none d-lg-inline'> LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
