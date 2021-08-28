const mongoose = require("mongoose");
    var schema = new mongoose.Schema(
            {
                description: String,
                priority: String
            },
            {timestamps: true}
    );

    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    const Todo = mongoose.model('Todo', schema);
    module.exports =  Todo;
