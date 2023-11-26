import axiosSecure from ".";


// all room fetch
export const getPackageAll = async () => {
    const { data } = await axiosSecure('/packageAll')

    return data;
}

// single room fetch

export const detailsPage = async id => {
    const { data } = await axiosSecure(`/packageAll/${ id }`)

    return data;
}

export const getUserPackage = async (email) => {
    const { data } = await axiosSecure(`/packageAll/${ email }`)

    return data;
}