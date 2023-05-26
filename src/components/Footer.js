import React from "react";
import imdbLogo from "../assets/images/imdb-logo.png";
import Celtic3 from "../assets/images/celtic-3.png"

function Footer() {

    return (
        <div className='footer'>
            <a href="https://www.imdb.com/name/nm6130423/?ref_=fn_al_nm_1">Find me on IMDb<img className="icon" src={imdbLogo}></img></a>
        </div>
    )

};

export default Footer;