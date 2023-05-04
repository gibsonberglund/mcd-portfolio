import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from "react"

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navbar({ currentPage, handlePageChange }) {

  const [workMenuDisplay, setWorkMenuDisplay] = useState(false);

    const hoverOnWork = () => {
        setWorkMenuDisplay(true)
    }

    const hoverOffWork = () => {
        setWorkMenuDisplay(false)
  }

  const [picMenuDisplay, setPicMenuDisplay] = useState(false);

    const hoverOnPic = () => {
        setPicMenuDisplay(true)
    }

    const hoverOffPic = () => {
        setPicMenuDisplay(false)
  }


  return (
    <section className='navbarcontainer'>
      <div className='navbarleft'>
        <ul className="navbar">
          <li className="nav-item">
            <a
              href="#Bio"
              onClick={() => handlePageChange('Bio')}
              className={currentPage === 'Bio' ? 'nav-link-active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li className='nav-item' id="picnavbtn" title="Photos" onMouseEnter={hoverOnPic} onMouseLeave={hoverOffPic}>Photos
            {
              picMenuDisplay &&
              <ul className='navdropmenu'>
                <li><Dropdown.Item href="#Headshots" onClick={() => handlePageChange('Headshots')} className={currentPage === 'Photos' ? 'nav-link-active' : 'nav-link'}>Headshots</Dropdown.Item></li>
                <li><Dropdown.Item href="#Gallery" onClick={() => handlePageChange('Gallery')} className={currentPage === 'Photos' ? 'nav-link-active' : 'nav-link'}>Gallery</Dropdown.Item></li>
              </ul>
            }
          </li>
          <DropdownButton title="Work" className='nav-item' id='worknavbtn' onMouseEnter={hoverOnWork} onMouseLeave={hoverOffWork} key='down-centered' drop='down-centered'>
              {
              workMenuDisplay &&
              <ul className='navdropmenu'>
                <li><Dropdown.Item href="#Theater" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link-active' : 'nav-link'}>Resume</Dropdown.Item></li>
                <li><Dropdown.Item href="#Theater" onClick={() => handlePageChange('Theater')} className={currentPage === 'Work' ? 'nav-link-active' : 'nav-link'}>Theater</Dropdown.Item></li>
                <li><Dropdown.Item href="#FilmAndTV" onClick={() => handlePageChange('FilmAndTV')} className={currentPage === 'Work' ? 'nav-link-active' : 'nav-link'}>Film And TV</Dropdown.Item></li>
                <li><Dropdown.Item href="#Voiceover" onClick={() => handlePageChange('VoiceOver')} className={currentPage === 'Work' ? 'nav-link-active' : 'nav-link'}>Voice Over</Dropdown.Item></li>
              </ul>
              }
          </DropdownButton>
        </ul>
      </div>
        <div className='navbarright'>
          <ul className='navbar'>
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
                href="#Writing"
                onClick={() => handlePageChange('Writing')}
                // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Writing' ? 'nav-link-active' : 'nav-link'}
              >
                Writing
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
          </ul>
      </div>
    </section>
  );
}

export default Navbar;
