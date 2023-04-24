import React from 'react';

function Contact() {

    return (
        <div className='contactform'>
            <input type='text' className='smallinput' id='useremail' placeholder='Email'></input>
            <input type='text' className='smallinput' placeholder='Name'></input>
            <textarea type='text' rows='4' className='largeinput' placeholder='Message'></textarea>
            <btn className='submitbtn'>Submit</btn>
        </div>
    )

};

export default Contact;