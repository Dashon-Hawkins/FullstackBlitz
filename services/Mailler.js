const sendGrid = require('sendgrid');
const helper= sendGrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
constructor({ subject, recipients}, content) {
super();

this.from_email = new helper.Email('no-reply@blitz.com');
this.subject = subject;
this.body = new helper.Content('text/html', content);
this.recipients =this.formatAddresses(recipients);


}



}

new Mailer(...)

module.export = Mailer;