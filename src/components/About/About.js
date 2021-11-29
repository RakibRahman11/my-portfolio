import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import NavBar from '../HomePage/NavBar/NavBar';
import profile from '../../Image/profile.png'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div style={{ marginTop: '20px' }}>
            <NavBar></NavBar>
            <Container sx={{ marginY: '80px' }}>
                <Grid container spacing={6}>
                    <Grid item xs={4} sm={4} md={4}>
                        <img src={profile} style={{ width: '100%' }} alt='' />
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} style={{paddingLeft:'100px'}}>
                        <Typography variant="h4" gutterBottom component="div">
                            About Myself
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            I am Rakib Rahman, student of Noakhali Science and Technology University in department of Statistics. After my studies, I want to take my career as 'Front-end Website Developer'. In the Home page, you can see my various projects.
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            If you want to develop your website, feel free to <Link to='/email' style={{textDecoration:'none'}}>Contact</Link> with me.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default About;