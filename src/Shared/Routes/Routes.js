import { createBrowserRouter } from "react-router-dom";
import Courses from "../../Pages/Courses/Courses";
import SIngleCourse from "../../Pages/SingleCourse/SIngleCourse";
import Categories from "../Categories/Categories";
import AppBar from "../Header/AppBar";
import Main from "../Layout/Main";

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
                element: <SIngleCourse></SIngleCourse>,
                loader: ({ params }) => fetch(`http://localhost:5000/course-category/${params.id}`)
            },
            {
                path: '/category',
                element: <Categories></Categories>,
            }
        ]
    }
])