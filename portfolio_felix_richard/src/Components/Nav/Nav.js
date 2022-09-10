import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav className='relative list-none mt-4 mb-4 md:flex md:w-full lg:mt-[30px]'>
                <ul className='text-red-400 text-lg text-center p-4 md:w-full md:flex md:justify-around lg:text-2xl lg:font-bold'>
                    <li className='pb-2 hover:text-red-300 hover:underline'>
                        <Link to='/'>Présentation</Link>
                    </li>
                    <li className='pb-2 hover:text-red-300 hover:underline'>
                        <Link to='/curriculum'>Mes projets</Link>
                    </li>
                    <li className='pb-2 hover:text-red-300 hover:underline'>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Nav;
