import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import picture from '../../../Image/Rakib.jpg'
import HomeNav from '../NavBar/HomeNav/HomeNav';

const Home = () => {
    return (
        <div style={{backgroundColor: 'gainsboro'}}>
            <HomeNav></HomeNav>
            <Grid container spacing={2} sx={{ padding: '50px' }}>
                <Grid item xs={12} sm={6} md={8} style={{ paddingTop: '8%' }}>
                    <Container>
                        <Typography variant="h3" gutterBottom component="div">
                            I am
                        </Typography>
                        <Typography variant="h2" gutterBottom component="div">
                            RAKIB <span>RAHMAN</span>
                        </Typography>
                        <NavLink to="/files/myfile.pdf" target="_blank" style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" sx={{ border: 1, borderColor: 'text.primary', color: 'black' }}>My Resume</Button>
                        </NavLink>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Container>
                        <img src={picture} style={{ width: '100%', borderRadius: '30%' }} alt='' />
                    </Container>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;