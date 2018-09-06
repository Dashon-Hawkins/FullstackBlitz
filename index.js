const express = require('express');
const mongoose = require('mongoose');
const cookieSession= require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const Keys = require('./config/keys');
const authRouter = require('./routes/authRoutes.js');
const BillingRouter = require('./routes/billingRoute.js')
const User =require('./models/User');
require('./services/passport.js');

mongoose.connect(Keys.mongoURL);


const app = express();
app.use(bodyParser.json())

app.use(
    cookieSession({
maxAge:30 * 24 * 60 * 60 * 1000,
keys:[Keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());




authRouter(app);
BillingRouter(app);

if(process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    //express will serve up the index.html file
    //if it doesn't recognize the route

    const path = require('path');

//express will serve up the index.html file
//if it doesn't recognize the route

    app.get('*', (req, res) => {

        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));


    });



}



app.listen(process.env.PORT || 8080,() => {
 console.log("server running on the port : 8080")
})