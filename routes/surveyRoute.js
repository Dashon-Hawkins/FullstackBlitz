const RequireLogin = require('../middlewares/requireLogin');
const RequireCredits= require('../middlewares/requireCredits')

module.exports = app => {
    app.post('/api/surveys', RequireLogin,RequireCredits,(req, res) => {
const {title, subject, body, recipients} = req.body;

    });

};