import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'gainsboro', paddingBottom: '30px', paddingTop: '15px' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', paddingRight: '40px' }} gutterBottom component="div">
                Social Links
            </Typography>
            <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: 'center', color: 'black' }}>
                <span>
                    <a href='https://www.facebook.com/rakib.rahman.1257/'><i style={{ color: 'black', marginRight: '50px' }} className="fab fa-facebook"></i></a>
                    <a href='https://github.com/RakibRahman11'><i style={{ color: 'black', marginRight: '50px' }} className="fab fa-github"></i></a>

                    <a href='https://www.linkedin.com/in/rakib-rahman11/'><i style={{ color: 'black', marginRight: '50px' }} className="fab fa-linkedin"></i></a>
                </span>
            </Typography>
        </div>
    );
};

export default Footer;