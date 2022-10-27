import React from 'react';

const Blog = () => {
    return (
        <div className='mt-20'>
            <div className="space-y-4">
                <details className="group border-l-4 border-green-500 bg-gray-50 p-6" open>
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="text-lg font-medium text-gray-900">
                            what is cors?
                        </h2>

                        <span
                            className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.
                    </p>
                </details>

                <details className="group border-l-4 border-green-500 bg-gray-50 p-6">
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="text-lg font-medium text-gray-900">
                            Why are you using firebase? What other options do you have to implement authentication?
                        </h2>

                        <span
                            className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">

                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. <br />
                        Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.

                    </p>
                </details>
                <details className="group border-l-4 border-green-500 bg-gray-50 p-6">
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="text-lg font-medium text-gray-900">
                            How does the private route work?
                        </h2>

                        <span
                            className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </p>
                </details>
                <details className="group border-l-4 border-green-500 bg-gray-50 p-6">
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="text-lg font-medium text-gray-900">
                            What is Node? How does Node work
                        </h2>

                        <span
                            className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </p>
                </details>
            </div>

        </div>
    );
};

export default Blog;