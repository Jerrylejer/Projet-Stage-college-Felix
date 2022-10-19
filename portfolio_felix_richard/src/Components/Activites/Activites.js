import React from 'react';
import MaisonForêt1 from '../../assets/Atelier_2019_Maison_Autonome_forêt(1).jpg';
import MaisonForêt2 from '../../assets/Atelier_2019_Maison_Autonome_forêt(2).jpg';
import MaisonForêt3 from '../../assets/Atelier_2019_Maison_Autonome_forêt(3).jpg';
import PlaceVide1 from '../../assets/Atelier_2021_Décors_PlaceVide(1).jpg';
import PlaceVide2 from '../../assets/Atelier_2021_Décors_PlaceVide(2).jpg';
import PlaceVide3 from '../../assets/Atelier_2021_Décors_PlaceVide(3).jpg';
import PlaceVide4 from '../../assets/Atelier_2021_Décors_PlaceVide(4).jpg';
import LumièreObjets1 from '../../assets/Atelier_2021_Lumière_Objets(1).jpg';
import LumièreObjets2 from '../../assets/Atelier_2021_Lumière_Objets(2).jpg';
import LumièreObjets3 from '../../assets/Atelier_2021_Lumière_Objets(3).jpg';
import LumièreObjets4 from '../../assets/Atelier_2021_Lumière_Objets(4).jpg';
import ensemble from '../../assets/ensemble.jpg';

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
                <iframe
                    className='max-w-[350px] md:max-w-[744px] mx-auto'
                    src='https://www.veed.io/embed/5fc6425e-fec2-4a8d-9347-9f952c3e0ffe'
                    width='744'
                    height='504'
                    frameborder='0'
                    title='Presentation2022_Trim'
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                ></iframe>
                <br />
                <hr />
                <p className='mb-4 mt-8'>
                    Maquette réalisée au cours de l'année 2019 sur le thème "maison autonome au coeur de la forêt".
                </p>
                <hr />
                <br />
                <p className='mb-8'>
                    <img
                        src={MaisonForêt1}
                        alt='ensemble-maquettes'
                        className='lg:max-w-[800px] mx-auto'
                    />
                </p>
                <p className='mb-8'>
                    <img
                        src={MaisonForêt2}
                        alt='ensemble-maquettes'
                        className='lg:max-w-[800px] mx-auto'
                    />
                </p>
                <p className='mb-8'>
                    <img
                        src={MaisonForêt3}
                        alt='ensemble-maquettes'
                        className='lg:max-w-[800px] mx-auto'
                    />
                </p>
                <br />
                <hr />
                <p className='mb-4 mt-8'>
                    Maquette réalisée au cours de l'année 2021 sur le thème "La lumière sur les objets".
                </p>
                <hr />
                <br />
                <p className='mb-8'>
                    <img
                        src={LumièreObjets1}
                        alt='ensemble-maquettes'
                        className='lg:max-w-[800px] mx-auto'
                    />
                </p>
                <p className='mb-8'>
                    <img
                        src={LumièreObjets2}
                        alt='ensemble-maquettes'
                        className='lg:max-w-[800px] mx-auto'
                    />
                </p>
                <p className='mb-8'>
                    <img
                        src={LumièreObjets3}
                        alt='ensemble-maquettes'
                        className='lg:max-w-[800px] mx-auto'
                    />
                </p>
                <p className='mb-8'>
                    <img
                        src={LumièreObjets4}
                        alt='ensemble-maquettes'
                        className='lg:max-w-[800px] mx-auto'
                    />
                </p>
                <br />
                <hr />
                <p className='mb-4 mt-8'>
                    Maquette réalisée au cours de l'année 2021 sur le thème "Décorer une place vide".
                </p>
                <hr />
                <br />
                <p className='mb-8'>
                    <img
                        src={PlaceVide1}
                        alt='ensemble-maquettes'
                        className='lg:max-w-[800px] mx-auto'
                    />
                </p>
                <p className='mb-8'>
                    <img
                        src={PlaceVide2}
                        alt='ensemble-maquettes'
                        className='lg:max-w-[800px] mx-auto'
                    />
                </p>
                <p className='mb-8'>
                    <img
                        src={PlaceVide3}
                        alt='ensemble-maquettes'
                        className='lg:max-w-[800px] mx-auto'
                    />
                </p>
                <p className='mb-8'>
                    <img
                        src={PlaceVide4}
                        alt='ensemble-maquettes'
                        className='lg:max-w-[800px] mx-auto'
                    />
                </p>
                <p className='mb-8'>
                    <img
                        src={ensemble}
                        alt='ensemble-maquettes'
                        className='lg:max-w-[800px] mx-auto'
                    />
                </p>
            </div>
        </div>
    );
};

export default Curriculum;
