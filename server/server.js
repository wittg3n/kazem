require("dotenv").config();

const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require('cors')
const port = process.env.PORT || 3001



//middlewares
app.use(cors({
    origin: 'http://localhost:3000', 
    optionsSuccessStatus: 200 
  }));
  app.use(express.urlencoded({ extended: true }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(helmet());

  //-session middleware
  app.use(
    session({
      secret: process.env.EXPRESS_SESSION,
      resave: false,
      saveUninitialized: true,
    })
  );
  //-passport middleware
  

  app.listen(port, () => {
    console.log("\x1b[42m%s\x1b[0m", `server is litening on localhost:${port}`);
  });
  