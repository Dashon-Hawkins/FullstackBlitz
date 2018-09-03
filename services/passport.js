const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const Keys = require('../config/keys.js');

const User = mongoose.model('users');

passport.use(
    new GoogleStrategy({

    clientID:Keys.googleClientID,
    clientSecret:Keys.googleClientSecret,
    callbackURL:'/auth/google/callback',
},
(accessToken, refreshToken, profile, done) => {
    User.findOne({googleId:profile.id})
.then(existingUser => {
    if(existingUser) {
 //we do not need added user this existing user
 done(null, existingUser);
    }
    else {
        new User({ googleId:profile.id}).save();
    }
})


})

);