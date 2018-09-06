const Keys = require('../config/keys.js');
const stripe = require('stripe')(Keys.stripeSecret);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
  const charges = await stripe.charges.create({
        amount:500,
        currency:'usd',
        description:'$5 for 5 credits',
        source:req.body.id
      });
// console.log(charges)
  req.user.credits +=5;
  const user= await req.user.save();

  res.send(user);

    });

};