﻿# RemoteEngine

# Remote Engine - Backend Project

Remote Engine is a backend project built with Node.js and MongoDB to manage user and developer registrations, login, and onboarding processes.

## Technologies Used

- Node.js
- MongoDB (mongoose)
- Bcrypt (Password hashing)
- JSON Web Token (JWT) for authentication
- CORS (Cross-Origin Resource Sharing)

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/remote-engine-backend.git
   cd remote-engine-backend
   
2. Install dependencies:
     npm install

3. Create a .env file in the root directory and add the following:

      PORT=8080
      URL=your_mongodb_connection_uri

4. Start the server:

      npm start

5. API Endpoints

User Registration:
Endpoint: /users/register
Method: POST
Description: Register a new user or developer.


User Login:
Endpoint: /users/login
Method: POST
Description: Log in existing users or developers.


Developer Onboarding:
Endpoint: /developers/onboarding
Method: POST
Description: Save onboarding details for developers.


6. Frontend Integration
The frontend can interact with the backend through the provided API endpoints.
Homepage
The homepage contains links to login and signup pages.


     
