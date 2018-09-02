const express = require('express');
require('./services/passport.js');
const authRouter = require('./routes/authRoutes.js');


const app = express();
authRouter(app);
app.listen(process.env.PORT || 8080,() => {
 console.log("server running on the port : 8080")
})