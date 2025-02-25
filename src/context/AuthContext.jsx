'use client'
import { createContext, useState,useContext } from 'react'

const initialValue = {
    signIn: () => { },
    signOut: () => { },
    currentUser: null
}

const AuthContext = createContext(initialValue);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const signIn = (user) => {
        if (!user) {
            // TODO: Handle null user.
        }
        setCurrentUser(user);

        // TODO: Set token into
    }

    const signOut = () => {
        setCurrentUser(null);
    }

    return <AuthContext.Provider value={{
        signIn,
        signOut,
        currentUser
    }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}