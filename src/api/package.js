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
// add koradata


export const addPackage = async (packageItem ) => {
    const { data } = await axiosSecure.post(`/packageAll`, packageItem)

    return data;
}

export const getUserPackage = async (email) => {
    const { data } = await axiosSecure(`/package/${ email }`)

    return data;
}