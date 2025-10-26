import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
                <Hero></Hero>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default HomeLayout;