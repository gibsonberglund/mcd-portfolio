import React from 'react';
import Button from '@mui/material/Button';


function Resume() {
    return (
        <div className="w3-animate-opacity">
            <div className='submitbtn'>
                <Button variant="outlined" sx={{color: 'rgb(234, 217, 76)', border: '1px solid rgb(234, 217, 76)'}}>Download my resume</Button>
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
}

export default Resume