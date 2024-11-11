import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react'
import { auth } from '../Firebase/firebase';

export const AuthContext = createContext(null);

function AuthProvider({ children }) {

    const name = "Sheikh Muhammad";

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        name,
        createUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
