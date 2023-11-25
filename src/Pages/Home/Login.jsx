import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../assets/login.png'
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { useAuth } from '../../hooks/useAuth';
import { getToken, saveUser } from '../../api/auth';
import toast from 'react-hot-toast';
import { ImSpinner9 } from "react-icons/im";


const Login = () => {
    const { singIn, gooleLogin, loading } = useAuth();
    const [ showPassword, setShowPassword ] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location?.state?.from?.pathname || '/'

    

    const handleLogin = async e => {
        e.preventDefault();

        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        


        try {

             // User login
            const result = await singIn(email, password)

        

            // get token
            await getToken('/')
            navigate(from, {replace:true})
            toast.success('Login Successful')

        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
        

    }

    // Handle Google Signin
    const handleGoogleSignIn = async () => {
        try {
            //2. User Registration using google
            const result = await gooleLogin()

            //4. save user data in database
            const dbResponse = await saveUser(result?.user)
            console.log(dbResponse)

            //5. get token
            await getToken(result?.user?.email)

            navigate(from, { replace: true })
            toast.success('login Successful')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }
    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100 w-2/3 h-3/5 my-12 mx-auto'>
            <div>
                <img className='h-full' src={image} alt="" />
            </div>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Log In</h1>
                    <p className='text-sm text-gray-400'>
                        Sign in to access your account
                    </p>
                </div>
                <form
                    
                    onSubmit={handleLogin}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                autoComplete='current-password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900'
                            />
                            <span className='absolute top-100 right-80 mt-2' onClick={() => setShowPassword(!showPassword)} >

                                {
                                    showPassword ? <AiFillUnlock className='text-green-600 text-2xl'></AiFillUnlock > : <AiFillLock className='text-red-500 text-2xl'></AiFillLock >



                                }
                            </span>
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-blue-500 w-full rounded-md py-3 text-white'
                        >
                            {loading ? <ImSpinner9 className='animate-spin m-auto' /> : 'Submit'}
                        </button>
                    </div>
                </form>
                <div className='space-y-1'>
                    <button className='text-xs hover:underline hover:text-blue-500 text-gray-400'>
                        Forgot password?
                    </button>
                </div>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Login with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div
                
                    onClick={handleGoogleSignIn}

                    className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                    <FcGoogle size={32} />

                    <p>Continue with Google</p>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Don&apos;t have an account yet?{' '}
                    <Link
                        to='/singup'
                        className='hover:underline hover:text-blue-500 text-gray-600'
                    >
                        Sign up
                    </Link>
                    .
                </p>
            </div>
        </div>

    );
};

export default Login;