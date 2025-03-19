// TODO: Import express and your User model
import express from 'express';

// TODO: Create an express router
var router = express.Router([options])
// TODO: Create POST route for user registration (/api/users/register)
// 1. Check if a user with the given email already exists
// 2. If not, create a new user with the request body data
// 3. Return the new user (without the password) with status 201
router.post('/api/users/register', async (req, res) => {
    const todo = new Todo(req.body);
    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
  
// TODO: Create POST route for user login (/api/users/login)
// 1. Find the user by email
// 2. Check if the password matches
// 3. If authentication successful, return user info (without password)
// 4. If authentication fails, return appropriate error message
router.post('/api/users/login', async (req, res) => {
    const todo = new Todo(req.body);
    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
// TODO: Export the router
export { router as todoRouter };