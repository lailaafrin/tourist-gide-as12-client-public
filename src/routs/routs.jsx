
import {
    createBrowserRouter,

} from "react-router-dom";
import MyLayouts from "../layouts/MyLayouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Home/Login";
import SingUp from "../Pages/Home/SingUp";
import GuideTour from "../Pages/Home/Guide/GuideTour";
import Commuity from "../Pages/Home/Commuity";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Blogs from "../Pages/Blogs";
import AllPackage from "../Pages/Home/Guide/AllPackage";
import { getPackageAll } from "../api/package";
import PrivateRout from "./PrivateRout";

export const myRouts = createBrowserRouter([
    {
        path: "/",
        element:<MyLayouts></MyLayouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/singup',
                element:<SingUp></SingUp>
            },
            {
                path: '/tourguide',
                element:<GuideTour></GuideTour>
            },
            {
                path: '/community',
                element:<Commuity></Commuity>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/allpackage',
                element: <PrivateRout><AllPackage></AllPackage></PrivateRout>,
                
                

            }
            



        ]
    },

    // {
    //     path: '/dashbord',
    //     element: <DashBorad></DashBorad>,
    //     children: [
    //         {
    //             path: 'cart',
    //             element: <Cart></Cart>
    //         },

    //         {
    //             path: 'addroom',
    //             element: <AddRoom></AddRoom>
    //         },
    //         {
    //             path: 'room-list',
    //             element: <MyListRoom></MyListRoom>
    //         }
    //     ]
    // }


]);
