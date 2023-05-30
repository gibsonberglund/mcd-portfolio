import React from "react";
import ChalDeep from "../assets/images/bookcover-chaldeep.jpg";
import IvanBon from "../assets/images/ivandbon.jpg";
import DecHar from "../assets/images/dechar.jpg";

function VoiceOver() {

    return (
        <div className="w3-animate-opacity">
            <div className='voiceoverpage'>
                <h2>Voice Work</h2>
                <div className="voiceworkcard">
                    <h3>Audiobook Narration</h3>
                    <div className="bookgrid">
                            <a style={{width: "25%"}} href="https://www.audible.com/pd/Challenger-Deep-Audiobook/B00TYOB1N8?qid=1685480528&sr=1-2&ref=a_search_c3_lProduct_1_2&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=20A97R65D8J42FGV8QK1&pageLoadId=v3eVNAW9AqRKl5rI&creativeId=0d6f6720-f41c-457e-a42b-8c8dceb62f2c">
                                <div style={{backgroundColor: "rgba(234, 218, 76, 0.51)", padding: "2%", margin: "3%", borderRadius: "20px"}} className="w3-card-4">
                                    <div style={{display: "flex", justifyContent: "center"}}>
                                        <img className="bookthumb" src={ChalDeep}></img>
                                    </div>
                                    <div className="w3-container w3-center">
                                        <p>Challenger Deep<small>by Neal Shusterman</small></p>
                                        <p>Narrated by: Michael Curran-Dorsano</p>
                                    </div>

                                </div>
                            </a>
                            <a style={{width: "25%"}} href="https://www.audible.com/pd/Ivory-and-Bone-Audiobook/B01EB2V5HY?qid=1685480528&sr=1-8&ref=a_search_c3_lProduct_1_8&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=20A97R65D8J42FGV8QK1&pageLoadId=v3eVNAW9AqRKl5rI&creativeId=0d6f6720-f41c-457e-a42b-8c8dceb62f2c">
                                <div style={{backgroundColor: "rgba(234, 218, 76, 0.51)", padding: "2%", margin: "3%", borderRadius: "20px"}} className="w3-card-4">
                                    <div style={{display: "flex", justifyContent: "center"}}>
                                        <img className="bookthumb" src={IvanBon}></img>
                                    </div>
                                    <div className="w3-container w3-center">
                                        <p>Ivory and Bone<small>by Julie Eshbaugh</small></p>
                                        <p>Narrated by: Michael Curran-Dorsano</p>
                                    </div>

                                </div>
                            </a>
                            <a style={{width: "25%"}} href="https://www.audible.com/pd/The-Deceivers-Heart-Audiobook/1338331264?qid=1685480528&sr=1-7&ref=a_search_c3_lProduct_1_7&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=20A97R65D8J42FGV8QK1&pageLoadId=v3eVNAW9AqRKl5rI&creativeId=0d6f6720-f41c-457e-a42b-8c8dceb62f2c">
                                <div style={{backgroundColor: "rgba(234, 218, 76, 0.51)", padding: "2%", margin: "3%", borderRadius: "20px"}} className="w3-card-4">
                                    <div style={{display: "flex", justifyContent: "center"}}>
                                        <img className="bookthumb" src={DecHar}></img>
                                    </div>
                                    <div style={{color: "black"}} className="w3-container w3-center">
                                        <p>The Deceiver's Heart<small>by Jennifer A. Nielsen</small></p>
                                        <p>Narrated by: Jesse Vilinsky, Michael Curran-Dorsano</p>
                                    </div>

                                </div>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default VoiceOver;