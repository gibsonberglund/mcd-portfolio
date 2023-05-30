import React from "react";
import HeadShot1 from '../assets/images/mcd-formal-pic.jpg';
import HeadShot2 from '../assets/images/mcd-druid-pic.jpg';

function Headshots() {
    return (
        <div className="w3-animate-opacity">
            <div className="proshotscontainer">
            <h2 className="showtitle">Professional Shots</h2>
            <div className="proshotspics">
                <img className="mainpic" src={HeadShot1}></img>
                <img className="showpic" src={HeadShot2}></img>
            </div>
            </div>
        </div>
    )
}

export default Headshots