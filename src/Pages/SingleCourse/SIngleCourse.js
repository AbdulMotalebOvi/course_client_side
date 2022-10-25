import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SIngleCourse = () => {
    const singleCourses = useLoaderData()
    console.log(singleCourses)
    return (
        <div className='mt-16'>
            {
                singleCourses.map(single => {
                    return (
                        <div className="card bg-base-100 shadow-xl">
                            <figure><img src={single.image} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{single.name}</h2>
                                <p className=''>{single.description}</p>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SIngleCourse;