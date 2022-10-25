import React from 'react';
import { Outlet } from 'react-router-dom';
import Categories from '../Categories/Categories';
import AppBar from '../Header/AppBar';
import './Main.css'

const Main = () => {
    return (
        <div>
            <AppBar>
                <div className='divided max-w-screen-xl	mx-auto'>
                    <div>
                        <Categories></Categories>
                    </div>
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </AppBar>
        </div>
    );
};

export default Main;