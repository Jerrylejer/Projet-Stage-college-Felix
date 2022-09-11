import React from 'react';
import ensemble from '../../assets/ensemble.jpg';
import ensembleFront from '../../assets/ensembleFront.jpg';
import ensembleFond from '../../assets/ensembleFond.jpg';


const Curriculum = () => {
    return (
        <div>
            <div className='text-center'>            
                <p className='mb-4'>
                    Depuis 2019 : Adhérent au CAUE et élève aux cours et stages
                    d'architecture
                </p>
                <p className='mb-6'>
                    Juin 2022 : Présentation de nos travaux devant les parents
                    d'élèves (casque audio conseillé !)
                </p>
                <iframe className='max-w-[350px] md:max-w-[744px] mx-auto'
                    src='https://www.veed.io/embed/5fc6425e-fec2-4a8d-9347-9f952c3e0ffe'
                    width='744'
                    height='504'
                    frameborder='0'
                    title='Presentation2022_Trim'
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                ></iframe>
                <p className='mb-4 mt-8'>
                    Mes maquettes réalisées au cours de l'année 2022
                </p>
                <p className='mb-8'>
                    <img
                        src={ensemble}
                        alt='ensemble-maquettes'
                        className='lg:max-w-[800px] mx-auto'
                    />
                </p>
                <p className='mb-8'>
                    <img
                        src={ensembleFront}
                        alt='ensemble-maquettes'
                        className='lg:max-w-[800px] mx-auto'
                    />
                </p>
                <p className='mb-8'>
                    <img
                        src={ensembleFond}
                        alt='ensemble-maquettes'
                        className='lg:max-w-[800px] mx-auto'
                    />
                </p>
            </div>
        </div>
    );
};

export default Curriculum;
