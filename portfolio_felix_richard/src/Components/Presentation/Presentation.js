import React from 'react';
import immeubles from '../../assets/immeubles.jpg';
import Felix from '../../assets/FélixRecad.jpg';
import Footer from '../Footer/Footer';

const Presentation = () => {
    return (
        <div className='w-full flex flex-col lg:flex-wrap lg:mt-[70px]'>
            <div className='flex md:flex-col lg:flex-row lg:items-center lg:content-center'>
                <div className='lg:mr-6'>
                    <img
                        src={Felix}
                        alt='félix'
                        className='hidden rounded-3xl md:block md:w-[10rem] md:mx-auto md:mb-8 lg:w-[13rem] lg:mb-0'
                    />
                </div>
                <cite className='hidden w-full text-center pb-4 mx-auto text-2xl leading-8 md:block lg:leading-10 lg:text-3xl'>
                    " Tous les hommes utiles doivent être en rapport les uns
                    avec les autres, de même que l'entrepreneur se réfère à
                    l'architecte et celui-ci au maçon et au charpentier. "
                </cite>
                <div className='hidden md:block text-center mw-auto ml-4'>
                    <p className='text-sm italic'>Auteur: Goethe</p>
                    <p className='text-sm italic'>
                        Artiste, Biologiste, Botaniste, Dramaturge, écrivain,
                        Poète, Romancier, Scientifique (1749 - 1832)
                    </p>
                </div>
                <div className='mx-auto'>
                    <img
                        src={immeubles}
                        alt='immeubles'
                        className='md:hidden h-[350px]'
                    />
                </div>
            </div>
            <Footer className='hidden w-full md:block ' />
        </div>
    );
};

export default Presentation;
