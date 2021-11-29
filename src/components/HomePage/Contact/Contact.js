import { Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <Container sx={{marginY:'100px'}}>
            <Link to='/email' style={{textDecoration:'none', color:'black', textAlign:'center'}}>
                <Typography variant="h4" gutterBottom component="div">
                    Contact through Email <i class="far fa-envelope"></i>
                </Typography>
            </Link>
        </Container>
    );
};

export default Contact;