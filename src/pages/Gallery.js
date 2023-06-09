import React from "react";
import Show1Pic1 from '../assets/images/crazy-canoe-pic.jpg';
import Show1Pic2 from '../assets/images/scary-canoe-pic.jpg';
import Show1Pic3 from '../assets/images/sandbox-cabin-trip.jpg';
import Show2Pic1 from '../assets/images/mcd-grainy-pic.jpg';
import Show2Pic2 from '../assets/images/mcd-fred-boat-pic.jpg';
import Show2Pic3 from '../assets/images/mcd-beach-pic.jpg';


function Gallery() {

    return (
        <div className="w3-animate-opacity">
            <div className='photogallery'>
                <div className="showcontainer1">
                    <h2 className="showtitle">The Sandbox Crew</h2>
                        <p className="showinfo">Canoe, Lake of the Isles</p>
                        <p className="showinfo">Written by: God</p>
                    <div className="showpics">
                        <img className="mainpic" src={Show1Pic1}></img>
                        <img className="showpic" src={Show1Pic2}></img>
                        <img className="showpic" src={Show1Pic3}></img>
                    </div>
                </div>
                <div className="showcontainer2">
                    <h2 className="showtitle">Gettin' Wild</h2>
                        <p className="showinfo">The Globe Theater</p>
                        <p className="showinfo">Written by: Billy Shakespeare</p>
                    <div className="showpics">
                        <img className="mainpic" src={Show2Pic1}></img>
                        <img className="showpic" src={Show2Pic2}></img>
                        <img className="showpic" src={Show2Pic3}></img>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Gallery;