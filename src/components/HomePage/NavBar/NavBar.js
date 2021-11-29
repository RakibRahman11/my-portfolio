import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <p style={{ paddingLeft: '20px' }}><i class="fas fa-caret-left"></i> Back to Home</p>
            </Link>
        </div>
    );
};

export default NavBar;