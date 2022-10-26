import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import { UserCircleIcon } from '@heroicons/react/24/solid'

const AppBar = ({ children }) => {
    const [dark, setDark] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    const handlerToLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    return (
        <div data-theme={dark ? 'dark' : 'light'} >
            <div className="navbar bg-base-100 max-w-screen-xl	mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">

                            <li><Link to="/">Course</Link></li>
                            <li><Link>FAQ</Link></li>
                            <li><Link>Blog</Link></li>
                            <li><div className='block  '>
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.email}</span>
                                            <button className='btn btn-sm btn-primary text-white mx-2' onClick={handlerToLogOut}>
                                                <Link to='/login' >Sign Out</Link>
                                            </button>
                                        </>
                                        :
                                        <div className='flex sm:flex flex-col text-left'>
                                            <button className='mb-2 px-2 py-2 ml-4 rounded btn-primary text-white'>
                                                <Link to='/login'>Log In</Link></button>

                                            <button className=' px-2 py-2 ml-4 rounded btn-primary text-white'><Link to='/signup'>Register</Link></button>

                                        </div>
                                }
                            </div></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Online Course</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 uppercase">

                        <li><Link to="/">Course</Link></li>
                        <li><Link>FAQ</Link></li>
                        <li><Link>Blog</Link></li>

                    </ul>
                </div>

                <div className="navbar-end">
                    <Link to='/profile' className='mr-3'>

                        {
                            user?.photoURL ?
                                <img src={user?.photoURL} alt=""
                                    style={{ width: '40px', height: '40px', borderRadius: '20px' }}
                                />

                                :
                                <UserCircleIcon className="h-8 w-8 text-slate-500" />
                        }

                    </Link>

                    <div className='hidden lg:block md:block '>
                        {
                            user?.uid ?
                                <>
                                    <span>{user?.email}</span>
                                    <button className='btn btn-sm btn-primary text-white mx-2' onClick={handlerToLogOut}>
                                        <Link to='/login' >Sign Out</Link>
                                    </button>
                                </>
                                :
                                <div className='flex sm:flex'>
                                    <button className='px-0 py-0 sm:px-2 sm:py-2 rounded btn-primary text-white text-[13px] sm:text-[17px]'>
                                        <Link to='/login'>Log In</Link></button>

                                    <button className=' px-2 py-2 ml-4 rounded btn-primary text-white'><Link to='/signup'>Register</Link></button>

                                </div>
                        }
                    </div>


                    <label className="swap swap-rotate ml-2">
                        <input type="checkbox" onClick={() => setDark(!dark)} />
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>

                </div>
            </div>
            {children}
        </div>
    );
};

export default AppBar;