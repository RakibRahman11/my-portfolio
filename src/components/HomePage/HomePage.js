import React from 'react';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import MyProjects from './MyProjects/MyProjects';

const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <MyProjects></MyProjects>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;