import React from "react";
import ProfilePic from '../assets/images/MCD-portfoliopic.jpeg'

function Bio() {

    return (
        <div className='biopage'>
            <h1 className="pagetitle">About Michael</h1>
            <div className="infocontainer">
                <div className="picandbio">
                    <p className="biotext">Michael Curran-Dorsano is an actor and writer, currently living in Belfast, Northern Ireland, UK. In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the
                        ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down
                        on or to eat: it was a hobbit hole, and that means comfort.</p>
                    <img className='profilepic' src={ProfilePic}></img>
                </div>
                <div>
                    <ul className="specslist">
                        <li className="listitems">Height: <p className="listitemdata">0.017 km</p></li>
                        <li className="listitems">Eye Color: <p className="listitemdata">orange</p></li>
                        <li className="listitems">Hair Color: <p className="listitemdata">blue</p></li>
                        <li className="listitems">Current Location: <p className="listitemdata">Paddyland</p></li>
                    </ul>
                </div>
        </div>
                <div className="recentworkcontainer">
                    <h2>Recent Work</h2>
                    <ul className="recentwork">
                        <li className="workitemtitle">TV</li>
                        <li className="workitem">TNT | The Last Ship | 2014-2019<p>Gator (Supporting)</p></li>
                        <li className="workitemtitle">Writing</li>
                        <li className="workitem">Deets</li>
                        <li className="workitem">Deets</li>
                        <li className="workitem">Deets</li>
                        <li className="workitemtitle">Stage</li>
                        <li className="workitem">Guys 'n Dolls<p>Valley View Middle School</p></li>
                        <li className="workitem">Seven Brides For Seven Brothers<p>Valley View Middle School</p></li>
                        <li className="workitem">The Hobbit<p>Da Guffrie</p></li>
                        <li className="workitemtitle">Audiobooks</li>
                        <li className="workitem">Deets</li>
                        <li className="workitem">Deets</li>
                        <li className="workitemtitle">Training</li>
                        <li className="workitem">Julliard<p>Drama Division</p></li>
                    </ul>
                </div>
        </div>
    )

};

export default Bio;