import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import project1 from '../../../Image/project1.JPG'
import project2 from '../../../Image/project2.JPG'
import project3 from '../../../Image/project3.JPG'

const MyProjects = () => {
    return (
        <Container sx={{ marginY: '100px' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', paddingY: '40px' }} gutterBottom component="div">
                My Projects
            </Typography>
            <Grid container spacing={10}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper>
                        <a href='https://ruvara-tees.web.app/'><img src={project1} style={{ width: '100%' }} alt='' /></a>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper>
                        <a href='https://delivery-solutions-home.web.app/'><img src={project2} style={{ width: '100%' }} alt='' /></a>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper>
                        <a href='https://medico-pharmacy.firebaseapp.com/'><img src={project3} style={{ width: '100%' }} alt='' /></a>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MyProjects;