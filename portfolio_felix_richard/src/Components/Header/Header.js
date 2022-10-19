import React from 'react';
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className='text-blue-200 flex flex-col font-bold mt-6 md:text-5xl md:mt-4'>
        <h className='text-4xl text-center text-blue-200 mb-8 lg:text-left lg:text-5xl tracking-wider'>Félix Richard</h>
        <p className='text-xl mb-4 text-justify'>14 ans, architecte en herbe, je suis en classe de 3ème <span className='text-2xl'>au collège Anne Frank</span>.</p>
        <p className='text-xl mb-10 text-justify'>Je suis à la recherche d'une semaine de stage dans un cabinet d'architecte <span className='underline text-2xl'>du 13 au 17 février 2023</span>.</p>
        <Typed className='text-2xl text-center mb-8 md:text-3xl lg:text-left leading-8 text-orange-400' strings={[`... Je suis motivé !`, `J'ai envie d'apprendre !`, `... Contactez-moi !`]} typeSpeed={60} backSpeed={40} loop/>
    </div>
  )
}

export default Header;