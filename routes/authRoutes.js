const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = app => {

    app.get('/auth/google', passport.authenticate('google', {
        scope:['profile','email']
        }));
        app.get('/auth/google/callback', passport.authenticate('google'));
app.get('/api/current_user', (req, res) => {
    res.send(req.user);
});

app.get('/api/logout', (req,res) => {
  req.logout();
  res.send(res.user)
})

        app.get('/', (req, res) => {
        res.send({ h1:'there'})
        });
}

