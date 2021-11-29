import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import NavBar from '../../NavBar/NavBar';
import projectSS1 from '../../../../Image/Project/Delivery Solutions/1.JPG'
import projectSS5 from '../../../../Image/Project/Delivery Solutions/5.JPG'
import projectSS6 from '../../../../Image/Project/Delivery Solutions/6.JPG'

const DeliverySolutions = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={projectSS1} style={{ width: '100%' }} alt='' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={projectSS5} style={{ width: '100%' }} alt='' />
                        <img src={projectSS6} style={{ width: '100%' }} alt='' />
                    </Grid>
                </Grid>
                <Typography variant="h6" sx={{ marginTop: '40px' }} gutterBottom component="div">
                    Link: <a href="https://delivery-solutions-home.web.app">Live site</a> | <a href="https://github.com/RakibRahman11/client-delivery-solutions-public">Client site</a> | <a href="https://github.com/RakibRahman11/server-delivery-solutions-public">Server site</a>
                </Typography>
                <Typography variant="h6" sx={{ marginY: '20px' }} gutterBottom component="div">
                    Details: Delivery Solutions is an online based home delivery service. After requesting an order, the deliveryman will deliver the product according to the orders. User can see his/her order in Profile section.
                </Typography>
                <Typography variant="h6" sx={{ marginY: '20px' }} gutterBottom component="div">
                    <ul>
                        <li>A viewer can see only products, reviews, and advertisement</li>
                        <li>S/he can place an order request after login/register account</li>
                        <li>Users can delete their ordered services and Backend Data</li>
                    </ul>
                </Typography>
                <Typography variant="h6" sx={{ marginY: '20px' }} gutterBottom component="div">
                    Technology: React, Bootstrap, React Router, React Hook Form, Axios,
                    Authentication, Nodejs, Express.js, MongoDB, Heroku.
                </Typography>
            </Container>
        </div>
    );
};

export default DeliverySolutions;