import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import NavBar from '../../NavBar/NavBar';
import projectSS1 from '../../../../Image/Project/Medico Pharmacy/1.JPG'
import projectSS2 from '../../../../Image/Project/Medico Pharmacy/2.JPG'
import projectSS3 from '../../../../Image/Project/Medico Pharmacy/3.JPG'
import projectSS4 from '../../../../Image/Project/Medico Pharmacy/4.JPG'
import projectSS5 from '../../../../Image/Project/Medico Pharmacy/5.JPG'
import projectSS6 from '../../../../Image/Project/Medico Pharmacy/6.JPG'

const MedicoPharmacy = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={projectSS1} style={{ width: '100%' }} alt='' />
                        <img src={projectSS4} style={{ width: '100%' }} alt='' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={projectSS5} style={{ width: '100%' }} alt='' />
                        <img src={projectSS6} style={{ width: '100%' }} alt='' />
                    </Grid>
                </Grid>
                <Typography variant="h6" sx={{ marginTop: '40px' }} gutterBottom component="div">
                    Link: <a href="https://medico-pharmacy.firebaseapp.com">Live site</a> | <a href="https://github.com/RakibRahman11/client-medico-pharmacy-public">Client site</a>
                </Typography>
                <Typography variant="h6" sx={{ marginY: '20px' }} gutterBottom component="div">
                    Details: Medicine can be defined as anything that addresses a health issue, be it of the body, mind or spirit of a human being and helps them get better by treating the illness.
                </Typography>
                <Typography variant="h6" sx={{ marginY: '20px' }} gutterBottom component="div">
                    <ul>
                        <li>An informative website where users can know about hospital</li>
                        <li>A user can get an emergency service and contact information</li>
                    </ul>
                </Typography>
                <Typography variant="h6" sx={{ marginY: '20px' }} gutterBottom component="div">
                    Technology: Bootstrap, CSS, React Router, React Hook Form, Authentication
                </Typography>
            </Container>
        </div>
    );
};

export default MedicoPharmacy;