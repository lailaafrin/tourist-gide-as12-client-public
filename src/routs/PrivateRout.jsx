import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';


import { useAuth } from '../hooks/useAuth';
import Loader from '../Sheard/Loader';

const PrivateRout = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();
    // console.log(location.pathname);

    if (loading) {
        
        return <Loader></Loader>


    }

    if (user?.email) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace={true} />;

};
export default PrivateRout;