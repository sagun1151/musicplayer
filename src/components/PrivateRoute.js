import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    let auth = localStorage.getItem("token")
    console.log('here',auth)
    return(
        auth.token ? <Navigate to="/login" /> : <Outlet/>
    )  
}

export default PrivateRoute;