var Gifts = require('./models/gifts');

module.exports = function(app) {

  app.get('/gifts', function(req, res) {
    // use mongoose to get all nerds in the database
    Gifts.find(function(err, gifts) {
      if (err)
        res.send(err);
      res.json(gifts);
    });
  });

  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
  });

};
