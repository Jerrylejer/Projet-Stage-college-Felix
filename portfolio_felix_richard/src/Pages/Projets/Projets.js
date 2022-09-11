import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Header from '../../Components/Header/Header';
import Curriculum from '../../Components/Activites/Activites';
import immeubles from '../../assets/immeubles.jpg';

const Projets = () => {
    return (
        <div>
            <img
                className='absolute w-full h-screen object-cover mix-blend-overlay md:hidden'
                src={immeubles}
                alt='login'
            />
            <Header />
            <Nav />
            <Curriculum />
        </div>
    );
};

export default Projets;
