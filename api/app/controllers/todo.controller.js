const Todo = require('../models/todo.model');

exports.create = (req, res) => {
   const todo = new Todo({
       description: req.body.description,
       priority: req.body.priority
   });

   todo.save()
       .then(data => {
           res.send(data);
       })
       .catch(err => {
           res.status(500).send({
               message:
               err.message || "Some error occurred while creating todo."
           });
       });
};

exports.findAll = (req, res) => {
    Todo.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(
                {
                    message: err.message || "Some error occurred while retrieving todos."
                }
            );
        });
};
