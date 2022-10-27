import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';


export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const createUserByGoogle = () => {

        return signInWithPopup(auth, googleProvider)
    }
    const createUserGithub = () => {

        return signInWithPopup(auth, githubProvider)
    }
    const creteuseByMailAndPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateNameAndPhoto = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        })
    }
    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }

            setLoading(false)
        })
        return () => { unsubsCribe() }
    }, [])
    const logOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        logOut,
        setLoading,
        creteuseByMailAndPass,
        updateNameAndPhoto,
        emailVerification,
        signIn,
        createUserByGoogle,
        createUserGithub,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;