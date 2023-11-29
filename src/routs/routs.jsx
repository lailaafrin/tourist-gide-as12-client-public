
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
import { detailsPage, getPackageAll, getUserPackage } from "../api/package";
import PrivateRout from "./PrivateRout";
import DetailsePackage from "../Pages/Home/Guide/DetailsePackage";
import DashBorad from "../Pages/Dashborad/DashBorad";
import MyProfile from "../Pages/Dashborad/Tourist/MyProfile";
import MyBokings from "../Pages/Dashborad/Tourist/MyBokings";
import MywishList from "../Pages/Dashborad/Tourist/MywishList";
import TouristRout from "./TouristRouts";
import ManageUsers from "../Pages/Dashborad/admin/ManageUsers";
import AdminRout from "./AdminRout";
import MyAssinged from "../Pages/Dashborad/Guider/MyAssinged";
import Error from "../Pages/Error";
import Profile from "../Pages/Dashborad/AllUsers.jsx/Profile";


export const myRouts = createBrowserRouter([
    {
        path: "/",
        element: <MyLayouts></MyLayouts>,
        errorElement:<Error></Error> ,
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
            },
            {
                path: '/detailsePackage/:id',
                element: <PrivateRout> <DetailsePackage></DetailsePackage></PrivateRout>,
                loader:({params})=>detailsPage(params.id)
            },
           
            ]
    },

    {
        path: '/dashboard',
        element: <PrivateRout><DashBorad></DashBorad></PrivateRout>,
        children: [
           

            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>,
               
            },
            {
                path: 'myBookings',
                element: <PrivateRout>
                    <TouristRout> <MyBokings></MyBokings></TouristRout>
                </PrivateRout>
                
            },
            {
                path: 'mywishList',
                element: <PrivateRout><MywishList></MywishList></PrivateRout>
            },
            {
                path: 'manage-users',
                element: <PrivateRout>
                    <AdminRout>
                        <ManageUsers></ManageUsers>
                    </AdminRout>
                </PrivateRout>
            },
            {
                path: 'my-assined',
                element:<MyAssinged></MyAssinged>
            },
            {
                path: 'profile',
                element: <PrivateRout><Profile></Profile></PrivateRout>
            },
          
        ]
    },


   


]);
