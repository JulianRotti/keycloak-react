import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext.js';
import { hasRole } from '../services/keycloak.js';
import { Navigate } from 'react-router-dom';

export default function AccessControl ({ requiredRoles, children, fallback = null, redirect = false}) {
    
    const isAuthenticated = useContext(AuthContext);
    
    if (requiredRoles.includes('public')) {
        return children;
    }
    
    const hasRequiredRole = requiredRoles.some(role => hasRole(role));

    if (!isAuthenticated || !hasRequiredRole) {
        return redirect ? <Navigate to="/no-access" replace/> : fallback;
    }

    return children;
}