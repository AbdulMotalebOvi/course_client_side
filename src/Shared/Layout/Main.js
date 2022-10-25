import React from 'react';
import { Outlet } from 'react-router-dom';
import Categories from '../Categories/Categories';
import AppBar from '../Header/AppBar';
import './Main.css'

const Main = () => {
    return (
        <div>
            <AppBar></AppBar>
            <div className='divided max-w-screen-xl	 mx-auto'>
                <div>
                    <Categories></Categories>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;