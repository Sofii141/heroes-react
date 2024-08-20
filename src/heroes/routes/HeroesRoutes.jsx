import React from 'react'
import { NavBar } from '../../ui'
import { Dcpage, MarvelPage, HeroPage, SearchPage } from '../pages';
import { Route, Routes, Navigate } from 'react-router-dom';

export const HeroesRoutes = () => {
    return (
        <>
            <NavBar></NavBar>

            <div className='container'>
                <Routes>
                    <Route path='marvel' element={<MarvelPage></MarvelPage>}></Route>
                    <Route path='dc' element={<Dcpage></Dcpage>}></Route>

                    <Route path='search' element={<SearchPage></SearchPage>}></Route>
                    <Route path='hero/:heroId' element={<HeroPage></HeroPage>}></Route>

                    <Route path='/' element={<Navigate to='/marvel'></Navigate>}></Route>
                </Routes>
            </div>


        </>
    );
};
