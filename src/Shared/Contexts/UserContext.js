import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()

    const createUserByGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const createUserByEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateNameAndPhoto = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        })
    }
    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            return currentUser
        })
        return () => { unsubscribe() }
    }, [])
    const authInfo = {
        user,
        logOut,
        createUserByEmailPassword,
        updateNameAndPhoto,
        emailVerification,
        signIn,
        createUserByGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;