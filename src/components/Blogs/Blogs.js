import { Typography } from '@mui/material';
import React from 'react';
import NavBar from '../HomePage/NavBar/NavBar';

const Blogs = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Typography variant="h5" sx={{ textAlign: 'center', marginY:'17.8%' }} gutterBottom component="div">
                Blogs are coming soon...
            </Typography>
        </div>
    );
};

export default Blogs;