import React, { useContext } from "react";
import { getUsernameAndRoles } from "../../services/keycloak.js";
import { AuthContext } from "../../contexts/AuthContext.js";

export default function UserInfo () {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return null;
    }

    const {username, roles} = getUsernameAndRoles(['editor', 'viewer']);

    return (
        <div>
            <p>{ `username: ${username}` }</p>
            <p>{ `roles: ${roles.join(", ")}` }</p>
        </div>
    );
}