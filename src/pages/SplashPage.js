import React from "react";
import SplashPic from "../assets/images/mcd-splash.jpg";

function Splash() {
    return (
        <div className="splashpage">
            <img className="w3-animate-opacity" src={SplashPic}></img>
        </div>
    )
}

export default Splash