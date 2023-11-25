import axiosSecure from ".";


// all room fetch
export const getPackageAll = async () => {
    const { data } = await axiosSecure('/packageAll')

    return data;
}