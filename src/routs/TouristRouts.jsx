import React from 'react';
import { Navigate } from 'react-router-dom';
import Loader from '../Sheard/Loader';
import useRole from '../hooks/useRole';

const TouristRout = ({ children }) => {

  const [ role,loading ] = useRole();

 

    if (loading) {

        return <Loader></Loader>


    }

    if (role === 'tourist') {
        return children;
    }
    return <Navigate to='/dashboard' />;

};
export default TouristRout;