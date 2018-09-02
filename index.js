const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').strategy;
const Keys = require('./config/keys')

const app = express();

passport.use(new GoogleStrategy({
    clientID:Keys.googleClientID,
clientSecret:Keys.googleClientSecret,
callbackURL:'/auth/google/callback'
 }, (accessToken) => {
     console.log(accessToken);

 })
);



app.get('/', (req, res) => {
res.send({ h1:'there'})
});
app.listen(process.env.PORT || 8080,() => {
 console.log("server running on the port : 8080")
})