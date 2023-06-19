import React from "react";
import SplashPic from "../assets/images/mcd-splash.jpg";
import ProfilePic from "../assets/images/biopic.jpg";
import Button from '@mui/material/Button';

import Celtic2 from "../assets/images/celtic-2.png";

import ImageGallery from 'react-image-gallery';

import Show1Pic1 from '../assets/images/crazy-canoe-pic.jpg';
import Show1Pic1Thumb from '../assets/images/crazy-canoe-pic-thumb.jpg';
import Show1Pic2 from '../assets/images/scary-canoe-pic.jpg';
import Show1Pic2Thumb from '../assets/images/scary-canoe-pic-thumb.jpg';
import Show1Pic3 from '../assets/images/sandbox-cabin-trip.jpg';
import Show1Pic3Thumb from '../assets/images/sandbox-cabin-trip-thumb.jpg';
import Show2Pic1 from '../assets/images/mcd-grainy-pic.jpg';
import Show2Pic1Thumb from '../assets/images/mcd-grainy-pic-thumb.jpg';
import Show2Pic2 from '../assets/images/mcd-fred-boat-pic.jpg';
import Show2Pic2Thumb from '../assets/images/mcd-fred-boat-pic-thumb.jpg';

const images = [
    {
      original: Show1Pic1,
      thumbnail: Show1Pic1Thumb,
    },
    {
      original: Show1Pic2,
      thumbnail: Show1Pic2Thumb,
    },
    {
      original: Show1Pic3,
      thumbnail: Show1Pic3Thumb,
    },
    {
        original: Show2Pic1,
        thumbnail: Show2Pic1Thumb,
    },
    {
        original: Show2Pic2,
        thumbnail: Show2Pic2Thumb,
    },
  ];

function Splash({handlePageChange}) {
    return (
        <div className="landingcontainer">
            <div className="w3-animate-opacity">


                <div className="splashpage">
                    <img className="w3-animate-opacity" src={SplashPic}></img>
                </div>


                <div className='biopage'>
                    <h1 className="pagetitle">About Michael</h1>
                    <div className="infocontainer">
                        <div className="picandbio">
                            <p className="biotext">Michael Curran-Dorsano is an actor and writer, currently living in Belfast, Northern Ireland, UK. In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the
                                ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down
                                on or to eat: it was a hobbit hole, and that means comfort.</p>
                            <img className='profilepic' src={ProfilePic}></img>
                        </div>
                        <div className="buffer"></div>
                    </div>
                </div>
            
                <div className="workcontainer">
                    <h1 className="pagetitle">Work</h1>
                    <div className="workbuttons">
                        <div className="workbuttonsRow1" style={{display: "flex", justifyContent: "space-evenly", margin: "2%"}}>
                            <Button variant="outlined" sx={{color: 'rgb(234, 217, 76)', border: '1px solid rgb(234, 217, 76)'}} style={{width: "200px", height: "75px"}} onClick={() => {handlePageChange('Writing');}}>Writing</Button>
                            {/* <img style={{height: '200px', position: 'absolute', marginTop: '-3%'}} src={Celtic2}></img> */}
                            <Button variant="outlined" sx={{color: 'rgb(234, 217, 76)', border: '1px solid rgb(234, 217, 76)'}} style={{width: "200px", height: "75px"}} onClick={() => {handlePageChange('FilmAndTV');}}>Film and TV</Button>
                        </div>
                        <div className="workbuttonsRow2" style={{display: "flex", justifyContent: "center", margin: "2%"}}>
                            <Button variant="outlined" sx={{color: 'rgb(234, 217, 76)', border: '1px solid rgb(234, 217, 76)', margin: '1%'}} style={{width: "200px", height: "75px"}} onClick={() => {handlePageChange('Voice Over');}}>Voice Over</Button>
                            <Button variant="outlined" sx={{color: 'rgb(234, 217, 76)', border: '1px solid rgb(234, 217, 76)', margin: '1%'}} style={{width: "200px", height: "75px"}} onClick={() => {handlePageChange('Theater');}}>Theater</Button>
                        </div>
                        <div className="workbuttonsRow3" style={{display: "flex", justifyContent: "center", margin: "2%"}}>
                            <Button variant="contained" sx={{backgroundColor: 'rgb(234, 217, 76)', border: '1px solid rgb(234, 217, 76)', margin: '1%'}} onClick={() => {handlePageChange('Resume');}}>Resume</Button>
                            <Button variant="contained" sx={{backgroundColor: 'rgb(234, 217, 76)', border: '1px solid rgb(234, 217, 76)', margin: '1%'}} onClick={() => {handlePageChange('Headshots');}}>Headshots</Button>
                        </div>
                    </div>
                </div>


            <div className="imageCarousel">
                <ImageGallery sx={{height: '350px'}} items={images} />;
            </div>

            
            </div>
        </div>
    )
}

export default Splash