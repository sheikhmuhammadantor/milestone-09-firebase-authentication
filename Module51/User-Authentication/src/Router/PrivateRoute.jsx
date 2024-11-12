import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import Orders from '../Pages/Orders';
import { Navigate } from 'react-router-dom';

function PrivateRoute() {

    const { user } = useContext(AuthContext);

    if (user) {
        return <Orders></Orders>
    }

    return (
        <Navigate to="/"></Navigate>
    )
}

export default PrivateRoute
