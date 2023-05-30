import React from "react";
import BeeKeeper from "../assets/images/beekeeper.jpg";
import Druid2 from "../assets/images/druidshot2.jpg";
import Rearview from "../assets/images/rearview.jpg";

function Theater() {

    return (
        <div className="w3-animate-opacity">
            <div className='theaterpage'>
                <h2>Productions</h2>
                <div className="showcard">
                    <h3>Bee-Keepin' It Real</h3>
                    <div className="picandtext">
                        <img className="theaterpic" src={BeeKeeper}></img>
                        <div className="theatertext">
                            <p>In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole,
                            filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down
                            on or to eat: it was a hobbit hole, and that means comfort. It had a perfectly round door like a porthole,
                            painted green, with a shiny yellow brass knob in the exact middle. The door opened on to a tube-shaped hall like
                            a tunnel: a very comfortable tunnel without smoke, with panelled walls, and floorstiled and carpeted, provided
                            with polished chairs, and lots and lots of pegs forhats and coats - the hobbit was fond of visitors.
                            </p>
                            <a className="theaterlink">More about this production</a>
                        </div>
                    </div>
                </div>
                <div className="showcard">
                    <h3>Rumplestiltskin</h3>
                    <div className="picandtext">
                        <div className="theatertext">
                            <p>In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole,
                            filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down
                            on or to eat: it was a hobbit hole, and that means comfort. It had a perfectly round door like a porthole,
                            painted green, with a shiny yellow brass knob in the exact middle. The door opened on to a tube-shaped hall like
                            a tunnel: a very comfortable tunnel without smoke, with panelled walls, and floorstiled and carpeted, provided
                            with polished chairs, and lots and lots of pegs forhats and coats - the hobbit was fond of visitors.</p>
                            <a className="theaterlink">More about this production</a>
                        </div>
                        <img className="theaterpic" src={Druid2}></img>
                    </div>
                </div>
                <div className="showcard">
                    <h3>Lookin' At The World Through My Rearview</h3>
                    <div className="picandtext">
                        <img className="theaterpic" src={Rearview}></img>
                        <div className="theatertext">
                            <p>In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole,
                            filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down
                            on or to eat: it was a hobbit hole, and that means comfort. It had a perfectly round door like a porthole,
                            painted green, with a shiny yellow brass knob in the exact middle. The door opened on to a tube-shaped hall like
                            a tunnel: a very comfortable tunnel without smoke, with panelled walls, and floorstiled and carpeted, provided
                            with polished chairs, and lots and lots of pegs forhats and coats - the hobbit was fond of visitors.</p>
                            <a className="theaterlink">More about this production</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Theater;