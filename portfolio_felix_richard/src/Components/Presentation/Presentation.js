import React from 'react';
import Felix from '../../assets/FélixRecad.jpg';


const Presentation = () => {
    return (
        <div className='w-full flex flex-col lg:flex-wrap lg:mt-[70px]'>
            <div className='flex flex-col lg:flex-row lg:items-center lg:content-center'>
                <div className='lg:mr-6'>
                    <img
                        src={Felix}
                        alt='félix'
                        className='hidden rounded-3xl md:block md:w-[10rem] md:mx-auto md:mb-8 lg:w-[13rem] lg:mb-0'
                    />
                </div>
                <cite className='w-full text-center pb-8 mx-auto text-2xl leading-8 lg:leading-10 lg:text-3xl'>
                    " Tous les hommes utiles doivent être en rapport les uns
                    avec les autres, de même que l'entrepreneur se réfère à
                    l'architecte et celui-ci au maçon et au charpentier. "
                </cite>
                <div className='text-center mw-auto ml-4'>
                    <p className='text-sm italic'>Auteur: Goethe</p>
                    <p className='text-sm italic'>
                        Artiste, Biologiste, Botaniste, Dramaturge, écrivain,
                        Poète, Romancier, Scientifique (1749 - 1832)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Presentation;
