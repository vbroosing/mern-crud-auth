const { Router } = require('express');
const { authRequire } = require('../middlewares/validateToken.js');
const { getTasks, getTask, addTask, delTask, updateTask } = require('../controllers/task.controller.js');

const router = Router();

router.get('/', authRequire, getTasks);
router.get('/tasks/:id', authRequire, getTask);
router.post('/tasks', authRequire, addTask);
router.delete('/tasks/:id', authRequire, delTask);
router.put('/tasks/:id', authRequire, updateTask);



module.exports = {
    router,
}