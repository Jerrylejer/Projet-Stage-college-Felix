import React from 'react';
import Liens from '../../Components/Liens/Liens';
import Nav from '../../Components/Nav/Nav';
import Header from '../../Components/Header/Header';
import immeubles from '../../assets/immeubles.jpg';

const Contact = () => {
    return (
        <div>
            <img
                className='absolute w-full h-screen object-cover mix-blend-overlay md:hidden'
                src={immeubles}
                alt='login'
            />
            <Header />
            <Nav />
            <Liens />
        </div>
    );
};

export default Contact;
