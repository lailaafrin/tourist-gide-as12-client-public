import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import image from '../../assets/login.png'
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { imageUpload } from '../../api/imageupload';
import { useAuth } from '../../hooks/useAuth';
import { getToken, saveUser } from '../../api/auth';
import toast from 'react-hot-toast';
import { ImSpinner9 } from "react-icons/im";

const SingUp = () => {
    const { createUser, handleUpdateProfile, gooleLogin,loading } = useAuth();
    const [ showPassword, setShowPassword ] = useState(false);
    const [ error, setError ] = useState("");
    const navigate = useNavigate();

    const handleRegister = async e => {
        e.preventDefault();

        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[ 0 ];
        const imageData = await imageUpload(image)
        

        setError('');
        setError('');

        setError({});

        if (password.length < 6) {
            setError({ password: 'Password must be at least 6 characters.' });
            return;
        } else if (!/[A-Z]/.test(password)) {
            setError({ password: 'Your password must contain at least one uppercase letter.' });
            return;
        }

        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            setError({ password: 'Your password must contain at least one special character.' });
            return;
        }

        

        
        try {
             
            // Upload Image
            const imageData = await imageUpload(image)

            // User Registration
            const result = await createUser(email, password)
            
            // Save username & profile photo
            await handleUpdateProfile(name, imageData?.data?.display_url)
            console.log(result)


            // save user data in database
            const dbResponse = await saveUser(result?.user);
            console.log(dbResponse);

            // get token
            await getToken(result?.user?.email)
            navigate('/')
            toast.success('Signup Successful')

        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
        console.log(imageData)

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
      navigate('/')
      toast.success('Signup Successful')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }

    return (
        
            <div className='flex justify-center items-center min-h-screen bg-gray-100 w-2/3 h-3/5 my-12 mx-auto'>
                <div>
                    <img className='h-full' src={image}  alt="" />
                </div>
                <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10  text-gray-900'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                        <p className='text-sm text-gray-400'>Welcome to StayVista</p>
                    </div>
                <form
                    onSubmit={handleRegister}
                        noValidate=''
                        action=''
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <label htmlFor='image' className='block mb-2 text-sm'>
                                    Select Image:
                                </label>
                                <input
                                    required
                                    type='file'
                                    id='image'
                                    name='image'
                                    accept='image/*'
                                />
                            </div>
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
                                type={showPassword ? "text" : "password"}
                                    name='password'
                                    autoComplete='new-password'
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
                            {
                                error.password && (
                                    <p className='text-red-500 text-sm mt-2'>
                                        {error.password}
                                    </p>
                                )
                            }
                            </div>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='bg-blue-500 w-full rounded-md py-3 text-white'
                        >
                            
                            {loading ? <ImSpinner9 className='animate-spin m-auto' /> : 'singup'}
                            
                            </button>
                        </div>
                    </form>
                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm dark:text-gray-400'>
                            Signup with social accounts
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
                        Already have an account?{' '}
                        <Link
                            to='/login'
                            className='hover:underline hover:text-blue-500 text-gray-600'
                        >
                            Login
                        </Link>
                        .
                    </p>
                </div>

            </div>
       

    );
};

export default SingUp;