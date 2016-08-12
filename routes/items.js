const ItemModel = require('../models/TaskModel.js');

app.get('/', (req, res, next) => {
    // Here we are asking mongoose to find TaskModels,
    // we are not passing any specifice attributes, such
    // as an id, so mongoose will find all tasks.
  ItemModel.find((err, items) => {
    // Queries are run asynchronously.
        // So we have to pass in a callback to be ran when the db query is finished
    res.render('index', {
      items: items
    });
  });
});

app.post('/items', (req, res, next) => {
  var item = new ItemModel({
        text : req.body.text
  });

  task.save((err, item) => {
        // Inserts are run asynchronously.
        // So we have to pass in a callback to be ran when the insert is finished
    res.redirect('/');
  });
});

module.exports = router;
