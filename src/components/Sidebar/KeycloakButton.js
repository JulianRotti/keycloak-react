import React, { useContext } from "react";
import { loginKeycloak, logoutKeycloak } from "../../services/keycloak.js";
import { AuthContext } from "../../contexts/AuthContext.js";

export default function KeycloakButton() {
    const { isAuthenticated } = useContext(AuthContext);

    const handleButtonClick = () => {  
        if (isAuthenticated) {
            logoutKeycloak();
        } else {
            loginKeycloak();
        }
    }

    return (
        <div>
            <button onClick={handleButtonClick}>
                { isAuthenticated ? "Logout" : "Login" }
            </button>
        </div>
    );
}