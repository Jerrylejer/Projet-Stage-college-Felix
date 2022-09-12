import React from 'react';

const Contact = () => {
    return (
        <div>
            <ul className='text-center text-xl'>
                <li className='p-4'><span className='hidden md:block'>Mon téléphone : </span>06.86.03.22.87</li>
                <li className='p-4'>
                   <span className='hidden md:block'>Mon adresse email :</span> 
                    <a href='mailto:cocogamingsub@gmail.com'>
                        cocogamingsub@gmail.com
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
