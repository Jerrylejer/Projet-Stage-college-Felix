import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Curriculum from './Components/Curriculum/Curriculum';
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
import Presentation from './Components/Presentation/Presentation';

function App() {
    return (
        <div className='relative w-[95%] mx-auto h-full md:w-[80%]'>
            <BrowserRouter>
                <Header />
                <Nav />
                <Routes>
                    <Route path='/' element={<Presentation />} />
                    <Route path='/curriculum' element={<Curriculum />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
