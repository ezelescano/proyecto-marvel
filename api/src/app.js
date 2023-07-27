const { requiresAuth } = require('express-openid-connect');
const express = require("express");
const morgan = require("morgan");
const { auth } = require('express-openid-connect');
const mainRouter = require("./Router");
const cors = require("cors");
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

app.use(cors({ origin: "http://localhost:3000" }));

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});


// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });

app.use(mainRouter);


module.exports = app;