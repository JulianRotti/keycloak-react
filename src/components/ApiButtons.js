import React, { useContext } from 'react';
import { getAccessToken } from '../services/keycloak.js';
import { AuthContext } from '../contexts/AuthContext.js';
import { getAllData, getDataById, postData } from '../services/api.js';

export function GetAllDataButton() {
    const { isAuthenticated } = useContext(AuthContext);

    const handleButtonClick = async () => {  
        if (isAuthenticated) {
            const accessToken = getAccessToken();
            try {
                const data = await getAllData(accessToken);
                alert(JSON.stringify(data));  // Use JSON.stringify for better alert visibility
            } catch (error) {
                alert("Error fetching data: " + error.message);
            }
        } else {
            alert("You need to be logged in to access this data.");
        }
    }

    return (
        <div>
            <button onClick={handleButtonClick}>
                Get all data
            </button>
        </div>
    );
}

export function GetDataByIdButton() {
    const { isAuthenticated } = useContext(AuthContext);
    const id = 1
    const handleButtonClick = async () => {  
        if (isAuthenticated) {
            const accessToken = getAccessToken();
            try {
                
                const data = await getDataById(id, accessToken);
                alert(JSON.stringify(data));  // Use JSON.stringify for better alert visibility
            } catch (error) {
                alert("Error fetching data: " + error.message);
            }
        } else {
            alert("You need to be logged in to access this data.");
        }
    }

    return (
        <div>
            <button onClick={handleButtonClick}>
                Get data with id {id}
            </button>
        </div>
    );
}

export function PostDataButton() {
    const { isAuthenticated } = useContext(AuthContext);
    const newData = {"name": "Heiko"}
    const handleButtonClick = async () => {  
        if (isAuthenticated) {
            const accessToken = getAccessToken();
            try {
                const data = await postData(newData, accessToken);
                alert("Success");  // Use JSON.stringify for better alert visibility
            } catch (error) {
                alert("Error fetching data: " + error.message);
            }
        } else {
            alert("You need to be logged in to access this data.");
        }
    }

    return (
        <div>
            <button onClick={handleButtonClick}>
                Post data with name {newData.name}
            </button>
        </div>
    );
}
