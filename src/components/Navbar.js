import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from "react";

import { Link } from "react-scroll";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navbar({ currentPage, handlePageChange, scrollDown }) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [picsAnchorEl, setPicsAnchorEl] = React.useState(null);
  const openPics = Boolean(picsAnchorEl);
  
  const handleClickPics = (event) => {
    setPicsAnchorEl(event.currentTarget);
  };
  const handleClosePics = () => {
    setPicsAnchorEl(null);
  };

  return (
    <section className='navbarcontainer'>
      <div className='navbarleft'>
        <ul className="navbar">
          <li className="nav-item">
            {currentPage === 'SplashPage' ?
              <Link
                href="Bio"
                // onClick={() => handlePageChange('SplashPage')}
                className={currentPage === 'Bio' ? 'nav-link-active' : 'nav-link'}
                // onClick={scrollDown}
                smooth
                to="Bio"
              >
                About
              </Link>
                : 
                <a href="#Bio"
                onClick={() => handlePageChange('SplashPage')}
                className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}
                >
                About
                </a>}

          </li>
          <li>
            <div>
            {currentPage === 'SplashPage' ?
              <Link
                href="Work"
                // onClick={() => handlePageChange('SplashPage')}
                className={currentPage === 'Bio' ? 'nav-link-active' : 'nav-link'}
                // onClick={scrollDown}
                smooth
                to="Work"
              >
                Work
              </Link>
                : 
                <a href="#Work"
                onClick={() => handlePageChange('SplashPage')}
                className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}
                >
                Work
                </a>}
              {/* <Menu
                id="basic-menu"
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                sx={{'& .MuiPaper-root': {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  border: 'none'
                }}}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={() => {handlePageChange('Writing'); handleClose();}}>Writing</MenuItem>
                <MenuItem onClick={() => {handlePageChange('Theater'); handleClose();}}>Theater</MenuItem>
                <MenuItem onClick={() => {handlePageChange('FilmAndTV'); handleClose();}}>Film and TV</MenuItem>
                <MenuItem onClick={() => {handlePageChange('VoiceOver'); handleClose();}}>Voice Over</MenuItem>
              </Menu> */}
            </div>
          </li>
          <li>
            <div>
            {currentPage === 'SplashPage' ?
              <Link
                href="Gallery"
                // onClick={() => handlePageChange('SplashPage')}
                className={currentPage === 'Bio' ? 'nav-link-active' : 'nav-link'}
                // onClick={scrollDown}
                smooth
                to="Gallery"
              >
                Gallery
              </Link>
                : 
                <a href="#Gallery"
                onClick={() => handlePageChange('SplashPage')}
                className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}
                >
                Gallery
                </a>}
              {/* <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClickPics}
              >
                Photos
              </Button> */}
              {/* <Menu
                id="basic-menu"
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                sx={{'& .MuiPaper-root': {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  border: 'none',
                }}}
                anchorEl={picsAnchorEl}
                open={openPics}
                onClose={handleClosePics}
              >
                <MenuItem className='menuitems' onClick={() => {handlePageChange('Headshots'); handleClosePics();}}>Headshots</MenuItem>
                <MenuItem className='menuitems' onClick={() => {handlePageChange('Gallery'); handleClosePics();}}>Gallery</MenuItem>
              </Menu> */}
            </div>
          </li>
        </ul>
      </div>
        <div className='navbarright'>
          <ul className='navbar'>
            <li className="nav-item">
              <a
                href="#Contact"
                onClick={() => handlePageChange('Resume')}
                // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
            {currentPage === 'SplashPage' ?
              <Link
                href="Contact"
                // onClick={() => handlePageChange('SplashPage')}
                className={currentPage === 'Bio' ? 'nav-link-active' : 'nav-link'}
                // onClick={scrollDown}
                smooth
                to="Contact"
              >
                Contact
              </Link>
                : 
                <a href="#Contact"
                onClick={() => handlePageChange('SplashPage')}
                className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}
                >
                Contact
                </a>}
            </li>
          </ul>
      </div>
    </section>
  );
}

export default Navbar;
