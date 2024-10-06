import React from 'react';
import { Link } from 'react-router-dom'; 
import routes from '../../routes/RouteConfig.js'; 
import KeycloakButton from './KeycloakButton.js'; 
import UserInfo from './UserInfo.js';
import AccessControl from '../AccessControl.js';

export default function Sidebar({ children }) {
  return (
    <div style={{ display: 'flex' }}>
        <div style={{ width: '20%', float: 'left' }}>
            <div>
                {routes
                .filter(route => !route.hidden)
                .map((route) => (
                    <AccessControl key={route.path} requiredRoles={route.roles}>
                        <p key={route.path}>
                            <Link to={route.path}>{route.name}</Link>
                        </p>
                    </AccessControl>
                ))}
            </div>

            <KeycloakButton />
            <UserInfo />
        </div>
        <div style={{ width: '80%', float: 'left' }}>
            {children} 
        </div>
    </div>
  );
}
