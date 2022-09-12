import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Contact from './Pages/Contact/Contact';
import LandingPage from './Pages/LandingPage/LandingPage';
import Projets from './Pages/Projets/Projets';

function App() {
    return (
        <div className='relative w-[95%] mx-auto h-full md:w-[80%]'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/curriculum' element={<Projets />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
