import React from 'react';
import { useQuery } from '@tanstack/react-query';


import { useAuth } from './useAuth';
import axiosSecure from '../api';

const useBook = () => {
    const { user } = useAuth()
    
  const { data: books = [] } = useQuery({
    queryKey: [ 'books', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/booking?email=${user.email}`)
            return res.data; 
        }
    })

return[books]

};

export default useBook;