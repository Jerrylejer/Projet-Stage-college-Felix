import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Header from '../../Components/Header/Header';
import Presentation from '../../Components/Presentation/Presentation';
import immeubles from '../../assets/immeubles.jpg';

const LandingPage = () => {
    return (
        <div className='relative w-full h-screen bg-zinc-500/40 md:bg-[#2a2929] p-4'>
                <img
                    className='absolute w-full h-screen object-cover mix-blend-overlay md:hidden'
                    src={immeubles}
                    alt='login'
                />
            <Nav />
            <Header />
            <Presentation />
        </div>
    );
};

export default LandingPage;
