import React from "react";
//import { View, StyleSheet, Text } from 'react-native';
import Celtic2 from "../assets/images/celtic-2.png";

function Header() {

    return (
        <a className="headeranchor" href="../pages/SplashPage">
            <div className="headercontainer">
                    <img className="headericon" src={Celtic2}></img>
                    <div className='header'>
                        <h1 className="headertitle">Michael</h1>
                        <h1 className="headertitle">Curran</h1>
                        <h1 className="headertitle">Dorsano</h1>
                    </div>
                    <img className="headericon" src={Celtic2}></img>
            </div>
        </a>
    )

};

export default Header;