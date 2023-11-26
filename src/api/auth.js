import axiosSecure from "."



// Save user data in database
export const saveUser = async user => {
    const currentUser = {
        email: user.email,
        role: 'guider',
        status: 'Verified',
    }
    const { data } = await axiosSecure.put(`/user/${ user?.email }`, currentUser)
    console.log(data)
    return data
}

// Get token from server
export const getToken = async email => {
    const { data } = await axiosSecure.post(`/jwt`, email)
    console.log('Token received  ', data)
    return data
}


// Clear token from browser
export const clearCookie = async () => {
    const { data } = await axiosSecure.get('/logout')
    return data
} 


// get roule

export const getRole = async (email) => {
    const { data } = await axiosSecure(`/user/${ email }`)

    return data.role
}