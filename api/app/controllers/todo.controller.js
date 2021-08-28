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

exports.update = (req, res) => {
   const id = req.params.id;

   Todo.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
       .then(data => {
           if(!data){
               res.status(404).send(
                   {
                       message: "Cannot update priority of this todo."
                   }
               );
           }
           else res.send({message: "Priority is updated successfully"});

    })
       .catch(err => {
           res.status(500).send(
               {
                   message: err.message || "Some error occurred while updating priority."
               }
           );
       });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Todo.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send(
                    {
                        message: "Couldn't find a todo with this id"
                    }
                );
            }
            else res.send(data);

        })
        .catch(err => {
            res.status(500).send(
                {
                    message: "Some error occurred while retrieving the todo by."
                }
            );
        });
};