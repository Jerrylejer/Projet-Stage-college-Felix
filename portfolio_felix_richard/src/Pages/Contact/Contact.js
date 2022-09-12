import React from 'react';
import Liens from '../../Components/Liens/Liens';
import Nav from '../../Components/Nav/Nav';
import Header from '../../Components/Header/Header';
import immeubles from '../../assets/immeubles.jpg';

const Contact = () => {
    return (
        <div className='relative w-full h-screen bg-zinc-500/40 md:bg-[#2a2929] p-4'>
            <img
                className='absolute w-full h-screen object-cover mix-blend-overlay md:hidden'
                src={immeubles}
                alt='login'
            />
            <Nav />
            <Header />
            <Liens />
        </div>
    );
};

export default Contact;
