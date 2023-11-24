import React, { createContext, useEffect, useState } from 'react';
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
// import { clearCookie } from '../api/auth';



export const AuthContext = createContext(null);

const auth = getAuth(app);




const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState({});
    const [ loading, setLoading ] = useState(true)

    //    google login
    const gooleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    // const githubLogin = () => {
    //     setLoading(true)
    //     return signInWithPopup(auth, githubProvider)
    // }


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }




    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const logOut = async() => {
        setLoading(true);
        // await clearCookie();
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            console.log('current user', currentUser);
            setLoading(false);
        })

        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        logOut,
        handleUpdateProfile,
        gooleLogin,
        // githubLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;