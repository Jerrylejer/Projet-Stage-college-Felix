import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { RiCloseCircleLine } from 'react-icons/ri';
import { CgMenuRound } from 'react-icons/cg';

const Nav = () => {
    // state pour ouverture fermeture nav en sm
    const [nav, setNav] = useState(false);
    // Fonction de toggle
    const toggleSwitch = () => {
        setNav(!nav);
    };

    return (
        <>
            <nav className='relative list-none mt-4 mb-4 md:flex md:w-full lg:mt-[30px]'>
                <ul className='hidden text-blue-400 text-xl font-semibold text-center p-4 md:flex md:w-full md:justify-around lg:text-2xl lg:font-bold'>
                    <li className='pb-12 hover:text-blue-300 hover:underline'>
                        <Link to='/'>Présentation</Link>
                    </li>
                    <li className='pb-12 hover:text-blue-300 hover:underline'>
                        <Link to='/curriculum'>Mes projets</Link>
                    </li>
                    <li className='pb-12 hover:text-blue-300 hover:underline'>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
                <div onClick={toggleSwitch} className='block md:hidden'>
                    {nav ? (
                        <RiCloseCircleLine size={30} />
                    ) : (
                        <CgMenuRound size={30} />
                    )}
                </div>

                <div onClick={toggleSwitch}
                    className={
                        nav
                            ? 'fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-1000'
                            : 'fixed left-[-100%]'
                    }
                >
                    <ul className='text-blue-400 text-xl font-semibold text-center p-4 md:w-full md:hidden md:justify-around lg:text-2xl lg:font-bold'>
                        <li className='pb-12 hover:text-blue-300 hover:underline'>
                            <Link to='/'>Présentation</Link>
                        </li>
                        <li className='pb-12 hover:text-blue-300 hover:underline'>
                            <Link to='/curriculum'>Mes projets</Link>
                        </li>
                        <li className='pb-12 hover:text-blue-300 hover:underline'>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Nav;
