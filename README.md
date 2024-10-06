# Role-Based Access Control (RBAC) with Keycloak in React Frontend

This project demonstrates how to secure a React frontend using Keycloak, implementing Role-Based Access Control (RBAC) such that only users with specific roles can access certain pages or components.

## Setup Keycloak

### 1. Install Keycloak with Docker
To set up Keycloak, create a `docker-compose.yml` file and run it with Docker:

```yaml
services:
  keycloak:
    image: quay.io/keycloak/keycloak:25.0.6
    container_name: keycloak
    environment:
      - KEYCLOAK_ADMIN=admin
      - KEYCLOAK_ADMIN_PASSWORD=admin
    ports:
      - "8080:8080"
    command: start-dev
    volumes:
      - keycloak_data:/opt/keycloak/data

volumes:
  keycloak_data:
```

Run Keycloak:
```bash
docker-compose up
```

Keycloak will be accessible at [http://localhost:8080](http://localhost:8080).

### 2. Configure Keycloak

- **Realm**: Create a new realm called `my-website`.
- **Roles**: Add two roles:
  - `viewer`
  - `editor`
- **Users**: Create users and assign them roles:
  - `test_viewer` (role: `viewer`)
  - `test_editor` (role: `editor`)
- **Credentials**: Assign a password to each of the users.
- **Client**: Create a client configuration for the React frontend:
  - **Client ID**: `my-website-frontend`
  - **Root URL** and **Web Origins**: `http://localhost:3000`
  - **Valid Redirect URLs**: `http://localhost:3000/*`

---

## Setup React Frontend

To run the React frontend:

1. **Clone the Project**:
   ```bash
   git https://github.com/JulianRotti/keycloak-react.git
   cd keycloak-react
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Application**:
   ```bash
   npm start
   ```

The React frontend will be available at [http://localhost:3000](http://localhost:3000). You can log in and test role-based access control based on the Keycloak configuration.

