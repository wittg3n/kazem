require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');
const passport = require('./config/passport'); // Your local strategy
const passportJWT = require('./config/passport-jwt'); // JWT strategy
const connectDB = require('./config/db');
const authApi = require('./api/auth');
const userApi = require('./api/user');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3001;

// Middlewares

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// CORS configuration
app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true, // Allow credentials (cookies, headers, etc.) to be sent with requests
  })
);

// Other middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser()); // Use cookie-parser middleware
app.use(helmet());

// Passport middleware
app.use(passport.initialize());
app.use(passportJWT.initialize()); // Initialize JWT strategy

// Database connection
connectDB().then(() => {
  console.log('Connected to the database');
}).catch((error) => {
  console.error('Database connection error:', error);
  process.exit(1); // Exit the process with failure
});

// Routes
app.use('/auth', authApi);
app.use('/user', passport.authenticate('jwt', { session: false }), userApi); // Protect /user routes with JWT

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log('\x1b[42m%s\x1b[0m', `Server is listening on http://localhost:${port}`);
});
