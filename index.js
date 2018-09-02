const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

const app = express();

app.get('/', (req, res) => {
res.send({ h1:'there'})
});
app.listen(process.env.PORT || 8080,() => {
 console.log("server running on the port : 8080")
})