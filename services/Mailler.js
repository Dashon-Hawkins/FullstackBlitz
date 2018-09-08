const sendGrid = require('sendgrid');
const helper= sendGrid.mail;
const keys = require('../config/keys');


class Mailer extends helper.Mail {

}