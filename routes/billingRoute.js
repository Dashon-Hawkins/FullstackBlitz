const Keys = require('../config/keys.js');

const stripe = require('stripe')(Keys.stripeSecret);

module.exports = app => {
    app.post('/api/stripe', (req, res) => {
      console.log(req.body);
    })

}