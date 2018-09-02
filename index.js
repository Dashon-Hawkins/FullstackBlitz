const express = require('express');
const mongoose = require('mongoose');
const Keys = require('./config/keys');
require('./services/passport.js');
const authRouter = require('./routes/authRoutes.js');

mongoose.connect(Keys.mongoURL);


const app = express();
authRouter(app);
app.listen(process.env.PORT || 8080,() => {
 console.log("server running on the port : 8080")
})