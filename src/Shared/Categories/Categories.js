import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../../Pages/Category/Category';

const Categories = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div className='text-[18px] font-semibold'>
            <h1>All Categories : {category.length}</h1>
            <div>
                {
                    category?.map(ct => <Category
                        key={ct.id}
                        singleCategory={ct}
                    >

                    </Category>)
                }
            </div>
        </div>
    );
};

export default Categories;