import React from 'react';
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className='text-green-500 flex flex-col font-bold mt-4 md:text-5xl'>
        <h className='text-4xl text-center text-gray-400 mb-4 lg:text-left lg:text-5xl'>Félix Richard</h>
        <p className='text-xl mb-4'>14 ans, architecte en herbe, je suis en classe de 3ème <span className='text-2xl'>au collège Anne Frank</span>.</p>
        <p className='text-xl mb-2'>Je suis à la recherche d'une semaine de stage dans un cabinet d'architecte <span className='underline text-2xl'>du 13 au 18 février 2023</span>.</p>
        <Typed className='text-2xl text-center mt-5 md:text-3xl lg:text-left leading-8 text-orange-400' strings={[`... Je suis motivé !`, `J'ai envie d'apprendre !`, `... Contactez-moi !`]} typeSpeed={60} backSpeed={40} loop/>
    </div>
  )
}

export default Header;