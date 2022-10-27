import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { jsPDF } from "jspdf";
import { useState } from 'react';
// import logo from '../../../public/logo512.png'

const SIngleCourse = () => {
    const singleCourses = useLoaderData()
    const [courses, setCourses] = useState([])
    const addToCart = selectedCourse => {
        if (courses) {
            const newCart = [...courses, selectedCourse]
            setCourses(newCart)
        }
    }
    const pdfGenerate = () => {
        var doc = new jsPDF('landscape', 'px', 'a4', 'false')
        // doc.addImage(logo, 65, 20, 500, 400)
        doc.setFont('Helvertica', 'bold')
        doc.text(60, 60, 'Name')
        doc.text(60, 80, 'Email')
        doc.save('a.pdf')
    }
    return (
        <div className='mt-10'>
            {
                singleCourses.map(single => {
                    return (

                        <div className="card bg-zinc-50 h-1/2 shadow-xl">

                            <div className='flex justify-between items-center px-5 bg-slate-200 py-4 border '>
                                <div className='card-header font-medium px-4 text-black'>{single.name}</div>
                                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-blue-700 text-white" onClick={pdfGenerate}>Download Pdf</button>
                            </div>

                            <figure className="px-10 pt-10"><img src={single.image} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{single.name}</h2>
                                <p className=''>{single.description}</p>
                                <div className='mt-4'>
                                    <button
                                        onClick={() => addToCart(single)}
                                        className="btn btn-active btn-primary">
                                        <Link to={`/checkout/${single.id}`}>Get Premium Access</Link></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SIngleCourse;