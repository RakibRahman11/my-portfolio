import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import NavBar from '../../NavBar/NavBar';
import projectSS1 from '../../../../Image/Project/Ruvara Tees/1.JPG'
import projectSS2 from '../../../../Image/Project/Ruvara Tees/2.JPG'
import projectSS3 from '../../../../Image/Project/Ruvara Tees/3.JPG'
import projectSS4 from '../../../../Image/Project/Ruvara Tees/4.JPG'
import projectSS5 from '../../../../Image/Project/Ruvara Tees/5.JPG'

const RuvaraTees = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={projectSS1} style={{ width: '100%' }} alt='' />
                        <img src={projectSS5} style={{ width: '50%', height: '300px' }} alt='' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={projectSS4} style={{ width: '100%' }} alt='' />
                        <img src={projectSS2} style={{ width: '50%' }} alt='' />
                        <img src={projectSS3} style={{ width: '50%' }} alt='' />
                    </Grid>
                </Grid>
                <Typography variant="h6" sx={{ marginTop: '40px' }} gutterBottom component="div">
                    Link: <a href="https://ruvara-tees.web.app">Live site</a> | <a href="https://github.com/RakibRahman11/client-ruvara-tees-public">Client site</a> | <a href="https://github.com/RakibRahman11/server-ruvara-tees-public">Server site</a>
                </Typography>
                <Typography variant="h6" sx={{ marginY: '20px' }} gutterBottom component="div">
                    Details: Ruvara Tees is an online e e-commerce website. Here an user can place customized phone cover. And also can give feedback about ordered products.
                </Typography>
                <Typography variant="h6" sx={{ marginY: '20px' }} gutterBottom component="div">
                    <ul>
                        <li>Responsive website with user authentication and Admin access
                        </li>
                        <li>In the DashBoard, users can see ordered products and give valuable feedback which showed in the Home section</li>
                        <li>An Admin has special access to adding products and users orders</li>
                    </ul>
                </Typography>
                <Typography variant="h6" sx={{ marginY: '20px' }} gutterBottom component="div">
                    Technology: React, Material UI, React Router, React Hook Form, Firebase
                    Authentication, Nodejs, Express.js, MongoDB, Heroku, Firebase Hosting.
                </Typography>
            </Container>
        </div>
    );
};

export default RuvaraTees;