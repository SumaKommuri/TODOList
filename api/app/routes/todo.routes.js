const {route} = require("express/lib/router");
module.exports = app => {
    const todos = require("../controllers/todo.controller.js");

    var router = require("express").Router();

    router.post("/", todos.create);

    router.get("/", todos.findAll);

    router.put("/:id",todos.update);

    router.get("/:id", todos.findOne);

    app.use('/api/todos', router);
}