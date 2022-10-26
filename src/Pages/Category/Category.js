import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ singleCategory }) => {
    const { id, image, name } = singleCategory
    return (
        <div className='m-4 py-2'>
            <Link to={`/singleCourse/${id}`} className='border p-2 rounded-2xl flex items-center justify-center mt-3 mb-1 bg-slate-50 hover:bg-slate-200 duration-200 cursor-pointer'>
                <img className='h-8' src={image} alt="" />
                <h3 className='ml-2 text-black'>{name}</h3>
            </Link>
        </div>
    );
};

export default Category;