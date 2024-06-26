
# Next.js Authentication and Dashboard Application
In the shadowy corners of the digital underworld, the AlephNull team has birthed a new entity—a different kind of ERP, one that defies the norms and rewrites the rules of the game.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/wittg3n/kazem.git
   cd kazem
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   PORT=3001
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   EXPRESS_SESSION=your_session_secret
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

5. Start the backend server:
   ```sh
   node server.js
   ```

### Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. You will be redirected to the login page if you are not authenticated.
3. After logging in, you will be redirected to your dashboard page.

## Project Structure

```bash
.
├── api
│   ├── auth.js
│   └── user.js
├── components
│   ├── Footer.jsx
│   ├── withAuth.jsx
│   └── ...
├── hooks
│   └── useAuth.js
├── pages
│   ├── _app.js
│   ├── dashboard
│   │   └── [userid].jsx
│   └── index.jsx
├── public
│   └── logo.svg
├── schema
│   └── User.js
├── config
│   ├── db.js
│   └── passport.js
├── styles
│   └── globals.css
├── .env
├── package.json
├── server.js
└── README.md
```

## API Endpoints

### Authentication

- `POST /auth/login`
  - Authenticates a user and returns a JWT token.

- `GET /auth/check-auth`
  - Checks if the user is authenticated by verifying the JWT token.

### User

- `GET /user/:userid`
  - Retrieves user data by user ID.

## Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: Passport.js, JWT

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
