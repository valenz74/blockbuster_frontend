import React from 'react'
import { Navigate } from 'react-router';

const ProtectedRoute = ({children, logged}) => {
  if(logged==true){
    return children;
  }
  return <Navigate to="/login"/>
}

export default ProtectedRoute