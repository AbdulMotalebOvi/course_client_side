import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>Education is a backbone of a nation</h1>
            <p>Go  back to <Link to='/signup' className='text-blue-500 font-semibold'>Sign Up</Link></p>
        </div>
    );
};

export default Terms;