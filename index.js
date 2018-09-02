const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Keys = require('./config/keys')

const app = express();

passport.use(
    new GoogleStrategy({

    clientID:Keys.googleClientID,
    clientSecret:Keys.googleClientSecret,
    callbackURL:'/auth/google/callback',

},
 (accessToken,profile, refreshtoken) => {
     console.log(accessToken);
     console.log(profile);
     console.log(refreshtoken);

 }
)
);


app.get('/auth/google', passport.authenticate('google', {
scope:['profile','email']
}));
app.get('/auth/google/callback', passport.authenticate('google'));









app.get('/', (req, res) => {
res.send({ h1:'there'})
});
app.listen(process.env.PORT || 8080,() => {
 console.log("server running on the port : 8080")
})