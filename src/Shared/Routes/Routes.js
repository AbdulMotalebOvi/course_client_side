import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/BLogs/Blog";
import Checkout from "../../Pages/CheckOut/Checkout";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Login from "../../Pages/LogIn/Login";
import Profile from "../../Pages/Profile/Profile";
import SignUp from "../../Pages/SignUp/SignUp";
import SIngleCourse from "../../Pages/SingleCourse/SIngleCourse";
import Categories from "../Categories/Categories";
import AppBar from "../Header/AppBar";
import Main from "../Layout/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/category')


            },
            {
                path: '/singleCourse/:id',
                element: <PrivateRoutes><SIngleCourse></SIngleCourse></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/course-category/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/course-category/${params.id}`)
            },
            {
                path: '/category',
                element: <Categories></Categories>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            }

        ]
    }
])