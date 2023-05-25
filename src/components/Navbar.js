import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from "react"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navbar({ currentPage, handlePageChange }) {

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
            <a
              href="#Bio"
              onClick={() => handlePageChange('Bio')}
              className={currentPage === 'Bio' ? 'nav-link-active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li
          onMouseOver={handleClickPics}
          >
            <div
              onMouseOutCapture={handleClosePics}
            >
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}

              >
                Photos
              </Button>
              <Menu
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
                // 
                // onClose={handleClosePics}
              >
                <MenuItem className='menuitems' onClick={handleClosePics}>Headshots</MenuItem>
                <MenuItem onClick={() => {handlePageChange('Gallery'); handleClosePics();}}>Gallery</MenuItem>
              </Menu>
            </div>
          </li>
          <li>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Work
              </Button>
              <Menu
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
                <MenuItem onClick={() => {handlePageChange('Resume'); handleClose();}}>Resume</MenuItem>
                <MenuItem onClick={handleClose}>Theater</MenuItem>
                <MenuItem onClick={() => {handlePageChange('FilmAndTV'); handleClose();}}>Film and TV</MenuItem>
                <MenuItem onClick={handleClose}>Voice Over</MenuItem>
              </Menu>
            </div>
          </li>
          {/* <DropdownButton title="Work" className='nav-item' id='worknavbtn' onMouseEnter={hoverOnWork} onMouseLeave={hoverOffWork} key='down-centered' drop='down-centered'>
              {
              workMenuDisplay &&
              <ul className='navdropmenu'>
                <li><Dropdown.Item href="#Theater" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link-active' : 'nav-link'}>Resume</Dropdown.Item></li>
                <li><Dropdown.Item href="#Theater" onClick={() => handlePageChange('Theater')} className={currentPage === 'Work' ? 'nav-link-active' : 'nav-link'}>Theater</Dropdown.Item></li>
                <li><Dropdown.Item href="#FilmAndTV" onClick={() => handlePageChange('FilmAndTV')} className={currentPage === 'Work' ? 'nav-link-active' : 'nav-link'}>Film And TV</Dropdown.Item></li>
                <li><Dropdown.Item href="#Voiceover" onClick={() => handlePageChange('VoiceOver')} className={currentPage === 'Work' ? 'nav-link-active' : 'nav-link'}>Voice Over</Dropdown.Item></li>
              </ul>
              }
          </DropdownButton> */}
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
