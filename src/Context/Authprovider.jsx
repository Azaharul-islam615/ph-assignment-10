import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../component/firebase/firbase.init';

export const AuthContext = createContext()

const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider()
const Authprovider = ({ children }) => {
    const [updatepasswordemail, setUpdatepasswordemail] = useState("")

    const [loading, setloading] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logout = () => {
        setloading(true)
        return signOut(auth)
    }
    const updateuserprofile = (updatedata) => {
        return updateProfile(auth.currentUser, updatedata)
    }
    const googleauth = () => {
        setloading(true)
        return signInWithPopup(auth, googleprovider)
    }
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
            setloading(false)
        })
        return () => {
            Unsubscribe()
        }
    }, [])
    const info = {
        user,
        setUser,
        createUser,
        logout,
        login,
        loading,
        updateuserprofile,
        googleauth,
        forgetPassword,
        setUpdatepasswordemail,
        updatepasswordemail
    }
    return <AuthContext value={info}>{children}</AuthContext>
};

export default Authprovider;