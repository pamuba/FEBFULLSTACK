const express = require('express')
const todoController = require('../controllers/todo.controller')
const router = express.Router()

//localhost:3000/todos
router.post("/", todoController.createTodo)

module.exports = router;