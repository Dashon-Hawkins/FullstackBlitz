
const mongoose = require('mongoose');
const RequireLogin = require('../middlewares/requireLogin');
 const RequireCredits= require('../middlewares/requireCredits');
 const Mailer = require('../services/Mailler');
 const surveyTemplate = require('../services/emailTemplate/surveyTemplate')


const Survey = mongoose.model('surveys');

module.exports = app => {
    app.post('/api/surveys', RequireLogin,RequireCredits,(req, res) => {
const {title, subject, body, recipients} = req.body;

const survey = new Survey({
    title,
    subject,
    body,
    recipients: recipients.split(',').map(email => ({ email: email.trim() })),
_user:req.user.id,
dateSent:Date.now()
});
//best place to send an email
const mailer = new Mailer(survey, surveyTemplate(survey));

    });

};