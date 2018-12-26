const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      source: req.body.id,
      amount: 500,
      currency: "usd",
      description: "Charge for $5 for 5 credits"
    });
    req.user.credits += charge.amount / 100;
    const user = await req.user.save();
    res.send(user);
  });
};
