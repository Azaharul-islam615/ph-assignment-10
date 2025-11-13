import React, { createContext, useEffect, useState } from 'react';
import app from '../component/firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
export const AuthContext=createContext()
const googleprovider = new GoogleAuthProvider()
const auth=getAuth(app)
const Authprovider = ({children}) => {
    const [loading, setloading] = useState(true)
    const [user, setUser] = useState(null)
    const [toggle,setToggle]=useState(null)
    console.log(user)
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
    const googleauth = () => {
        setloading(true)
        return signInWithPopup(auth, googleprovider)
    }
    const updateuserprofile = (updatedata) => {
        return updateProfile(auth.currentUser, updatedata)
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

    const info={
        user,
        setUser,
        createUser,
        logout,
        login,
        loading,
        googleauth,
        toggle,
        setToggle,
        updateuserprofile
      
       
    }
    return <AuthContext value={info}>{children}</AuthContext>
};

export default Authprovider;