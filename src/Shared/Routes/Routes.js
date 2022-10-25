import { createBrowserRouter } from "react-router-dom";
import Courses from "../../Pages/Courses/Courses";
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

            },
            {
                path: '/category',
                element: <Categories></Categories>,
                // loader: () => fetch('http://localhost:5000/category')
            }
        ]
    }
])