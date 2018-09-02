const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Keys = require('../config/keys')

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
