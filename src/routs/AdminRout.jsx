import React from 'react';
import { Navigate } from 'react-router-dom';



import Loader from '../Sheard/Loader';
import useRole from '../hooks/useRole';

const AdminRout = ({ children }) => {



    const [ role, loading ] = useRole();



    if (loading) {

        return <Loader></Loader>


    }

    if (role === 'admin') {
        return children;
    }
    return <Navigate to='/dashboard' />;

};
export default AdminRout;