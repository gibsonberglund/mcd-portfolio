import React from "react";
import Vid1 from "../assets/videos/mcd-pub-vid.mp4";

function FilmAndTV() {

    //COMBINE WITH VOICEOVER AND THEATER TO MAKE A 'WORK' SECTION

    return (
        <div className='filmandtvcontainer'>
            <h1 className="pagetitle">Film and TV</h1>
            <div className="vidcontainer">
                <video width='750' height='500' controls>
                    <source src={Vid1} type='video/mp4' />
                </video>
            </div>
        </div>
    )

};

export default FilmAndTV;