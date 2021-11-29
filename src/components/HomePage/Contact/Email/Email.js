import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Container, Grid, Typography } from '@mui/material';
import email from '../../../../Image/email.jpg'
import NavBar from '../../NavBar/NavBar';

const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qzogrxy', 'template_iftnusp', form.current, 'user_aSbP1DiFuvpL28tGCw61K')
            .then((result) => {
                console.log(result.text);
                alert('Thank you for reaching me out!')
                window.location.reload()
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <NavBar></NavBar>
            <Container sx={{ marginY: '60px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                    <img src={email} style={{width:'100%'}} alt='' />
                </Grid>
                <Grid item xs={12} sm={6} md={6} sx={{marginTop:'13%', paddingX:'5%'}}>
                    <Typography variant="h5" gutterBottom component="div">
                        Contact me
                    </Typography>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name: </label>
                        <input type="text" style={{ width: '39.5%', height: '30px' }} name="user_name" />
                        <br /><br />

                        <label>Email: </label>
                        <input type="email" style={{ width: '40%', height: '30px' }} name="user_email" />
                        <br /><br />


                        <textarea 
                        style={{ width: '48.5%', height: '50px' }} 
                        name="message"
                        placeholder="Feel free to message..."
                        />
                        <br /><br />

                        <input type="submit" value="Send" />
                    </form>
                </Grid>
            </Grid>

        </Container>
        </div>
    );
};

export default Email;