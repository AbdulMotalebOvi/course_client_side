import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData()
    return (
        <section className='mt-20'>
            {
                course.map(cr => {
                    return (

                        <div className="relative mx-auto max-w-screen-2xl">
                            <div className="bg-gray-50 py-12 md:py-24">
                                <div className="mx-auto max-w-lg px-4 lg:px-8">
                                    <div className="mt-12">
                                        <div className="flow-root">
                                            <ul className="-my-4 divide-y divide-gray-200">
                                                <li className="flex items-center justify-between py-4">
                                                    <div className="flex items-start">
                                                        <img
                                                            alt="Trainer"
                                                            src={cr.image}
                                                            className="h-28 w-28 flex-shrink-0 rounded-lg object-cover"
                                                        />

                                                        <div className="ml-4">
                                                            <p className="text-2xl font-bold" >{cr.name}</p>

                                                            <dl className="mt-1 space-y-1 text-xs text-gray-500">
                                                                <div>
                                                                    <dt className="inline">Color:</dt>
                                                                    <dd className="inline">Blue</dd>
                                                                </div>

                                                                <div>
                                                                    <dt className="inline">Size:</dt>
                                                                    <dd className="inline">UK 10</dd>
                                                                </div>
                                                            </dl>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p className="text-2xl">
                                                            {cr.price}
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}
export default Checkout;