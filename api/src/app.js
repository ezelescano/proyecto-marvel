const express = require("express");
const morgan = require("morgan");
const { auth } = require('express-openid-connect');
const mainRouter = require("./Router");

require('dotenv').config();

const { SECRET, BASEURL, CLIENTID, ISSUERBASEURL} = process.env;

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: SECRET,
    baseURL: BASEURL,
    clientID: CLIENTID,
    issuerBaseURL: ISSUERBASEURL
  };

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });

app.use(mainRouter);


module.exports = app;