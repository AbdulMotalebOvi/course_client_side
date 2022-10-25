import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Slider from "react-slick";


const Courses = () => {
    const loader = useLoaderData()
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 2,
        pauseOnHover: true,
        appendDots: dots => (
            <div
            >
                <ul style={{ marginRight: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "30px",
                    color: "blue",
                    border: '1px solid blue',
                    borderRadius: "50%",

                }}
            >
                {i + 1}
            </div>
        )

    }
    return (
        <div >
            <div className='grid grid-cols-1 gap-3 mt-28'>
                <Slider {...settings}>
                    {
                        loader.map(cr => {
                            return (
                                <div className='p-2'>
                                    <Link to={`/singleCourse/${cr.id}`} className="block   overflow-hidden rounded-lg border border-gray-300 shadow-sm">
                                        <img
                                            alt=""
                                            src={cr.image}
                                            className="h-56 w-full rounded-md object-cover p-4"
                                        />

                                        <div className="p-4">
                                            <dl>
                                                <div>
                                                    <dd className="text-2xl font-medium "> {cr.name}</dd>
                                                </div>
                                            </dl>
                                            <div className='mt-5'>
                                                <button className="btn btn-wide btn-primary">
                                                    <Link
                                                        to={`/singleCourse/${cr.id}`}
                                                    >View More</Link></button>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Courses;