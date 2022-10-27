import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Shared/Contexts/UserContext';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { emailVerification, creteuseByMailAndPass, updateNameAndPhoto, createUserGithub, createUserByGoogle } = useContext(AuthContext)

    const [pass, setPassword] = useState('')
    const [accepted, setAccepted] = useState(false)
    const navigate = useNavigate()

    const handlerToRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value
        // console.log(email, password);

        creteuseByMailAndPass(email, password)
            .then(result => {
                const user = result.user
                form.reset()
                updateNameAndPhoto(name, photoURL)
                verifiedEmail()
                toast.success('Please Verify your Email')
                navigate('/')

            })
            .catch(err => setPassword(err.message))
        const verifiedEmail = () => {
            emailVerification()
                .then(() => { })
        }
        if (password.length < 6) {
            setPassword('Password should be at least 6 characters (auth/weak-password).')
        } else {
            setPassword('')
        }
        setPassword('')

    }
    const handlerToCReateUserByGoogle = () => {
        createUserByGoogle()
            .then(() => { })

    }
    const handlerToCReateUserByGithub = () => {
        createUserGithub()
            .then(() => { })

    }
    const handlerToCheck = event => {
        setAccepted(event.target.checked);
    }

    return (

        <div className="mb-5  px-4  sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Please Sign Up
                </h1>

                <form onSubmit={handlerToRegister} action="" className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
                    <p className="text-lg font-medium">Sign up to your account</p>
                    <div className='flex justify-between'>
                        <div>
                            <label className="text-sm font-medium">Name</label>

                            <div className="relative mt-1">
                                <input
                                    type="text"
                                    id=""
                                    name='name'
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter Name"
                                    required
                                />

                                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className='flex-grow ml-2'>
                            <label for="email" className="text-sm font-medium">Email</label>

                            <div className="relative mt-1">
                                <input
                                    type="email"
                                    id="email"
                                    name='email'
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                    required
                                />

                                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                    </div>

                    <div>
                        <label for="email" className="text-sm font-medium">Photo Url</label>

                        <div className="relative mt-1">
                            <input
                                type="text"
                                id="text"
                                name='photoURL'
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Enter url"
                                required
                            />

                            <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div>
                        <label for="password" className="text-sm font-medium">Password</label>

                        <div className="relative mt-1">
                            <input
                                type="password"
                                id="password"
                                name='password'
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Enter password"
                                required
                            />

                            <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <p className='text-red-500 font-semibold'>{pass}</p>

                    <p><input type="checkbox" onClick={handlerToCheck} placeholder='Accept Our terms & conditions' className='mx-2' />Accept our <Link to='/terms' className='text-blue-500 font-semibold'>Terms</Link> & Conditions </p>
                    <button
                        disabled={!accepted}
                        type="submit"
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        Sign up
                    </button>
                    <div>

                        <Link onClick={handlerToCReateUserByGoogle} className="w-full rounded-lg  py-3  font-medium text-black uppercase btn btn-outline text-2xl btn-primary" to='/'><FaGoogle /></Link>
                    </div>
                    <div>
                        <Link onClick={handlerToCReateUserByGithub} className=" w-full rounded-lg  py-3  font-medium text-black uppercase btn btn-outline text-2xl btn-primary" to='/' ><FaGithub /></Link>
                    </div>


                    <p className="text-center text-sm ">
                        Already Have an account?
                        <Link className="text-blue-500 font-semibold underline" to="/login">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>

    )
};

export default SignUp;