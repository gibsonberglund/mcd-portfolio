import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navbar({ currentPage, handlePageChange }) {
  return (
    <section>
      <ul className="navbar">
        <li className="nav-item">
          <a
            href="#Bio"
            onClick={() => handlePageChange('Bio')}
            className={currentPage === 'Bio' ? 'nav-link-active' : 'nav-link'}
          >
            Biography
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Gallery"
            onClick={() => handlePageChange('Gallery')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Gallery' ? 'nav-link-active' : 'nav-link'}
          >
            Gallery
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#FilmAndTV"
            onClick={() => handlePageChange('FilmAndTV')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'FilmAndTv' ? 'nav-link-active' : 'nav-link'}
          >
            Film and TV
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Press"
            onClick={() => handlePageChange('Press')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Press' ? 'nav-link-active' : 'nav-link'}
          >
            Press
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#VoiceOver"
            onClick={() => handlePageChange('VoiceOver')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'VoiceOver' ? 'nav-link-active' : 'nav-link'}
          >
            Voice Over
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Writing"
            onClick={() => handlePageChange('Writing')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Writing' ? 'nav-link-active' : 'nav-link'}
          >
            Writing
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Navbar;
