import React from 'react';
import { Link } from 'react-router-dom';

const HomeNav = () => {
    return (
        <div style={{ backgroundColor: 'gainsboro', paddingTop: '20px' }}>
            <div style={{ textAlign: 'end' }}>
                <Link to='/about' style={{ textDecoration: 'none', fontSize: 20, paddingRight: '20px' }}>
                    About
                </Link>
                <Link to='/blogs' style={{ textDecoration: 'none', fontSize: 20, paddingRight: '20px' }}>
                    Blogs
                </Link>
                <Link to='/email' style={{ textDecoration: 'none', fontSize: 20, paddingRight: '20px' }}>
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default HomeNav;