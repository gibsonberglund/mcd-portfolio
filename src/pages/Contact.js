import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Contact() {

    return (
        <div className="w3-animate-opacity">
            <div className='contactform'>
                <div className='contactform'>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <h3 style={{textAlign: 'center'}}>Contact Me</h3>
                        <div className='textfielddiv'>
                            <TextField fullWidth sx={{margin: '2%'}} id="filled-basic" label="Name" variant="filled" />
                            <TextField fullWidth sx={{margin: '2%'}} id="filled-basic" label="Email" variant="filled" />
                            <div className='contactmemessage'>
                                <TextField fullWidth sx={{margin: '2%'}} id="filled-multiline-static" label="Message" multiline rows={4} variant="filled" />
                            </div>
                        </div>
                        <div className='submitbtn'>
                            <Button variant="outlined" sx={{color: 'rgb(234, 217, 76)', border: '1px solid rgb(234, 217, 76)'}}>Submit</Button>
                        </div>
                    </Box>
                </div> 
            </div>
        </div>
    )

};

export default Contact;