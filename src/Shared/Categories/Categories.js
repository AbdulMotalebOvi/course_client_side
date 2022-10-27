import React, { useEffect } from 'react';
import { useState } from 'react';
import Category from '../../Pages/Category/Category';

const Categories = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('https://course-express-brightslife.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div className='text-[18px] font-semibold'>
            <div className='shadow mt-5'>
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