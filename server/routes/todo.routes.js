module.exports = app => {
    const todoController = require('../controllers/todo.controller');
    
    app.get("/todos", todoController.getAll);
    app.post("/todos",  todoController.create); 

}