const { Task } = require('../models/task.model.js');

const getTasks = async (req, res) => {   
    const tasks = await Task.find({user: req.user.id}).populate('user');
    res.json(tasks);
};
const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'usuario no encontrado.'});
    res.json(task);
};
const addTask = async (req, res) => {

    const {title, description, date} = req.body;

    try {   

        const newTask = new Task({
            title,
            description,
            date,
            user: req.user.id
            });

        const taskSaved = await newTask.save();

        res.json(taskSaved);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};
const delTask = async (req, res) => {

    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Tarea no encontrada.'});
    res.sendStatus(204);
};
const updateTask = async (req, res) => {

    // Así da el dato viejo
    // const task = await Task.findByIdAndUpdate(req.params.findById, req.body);
    //Así da el dato nuevo
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    if (!task) return res.status(404).json({ message: 'usuario no encontrado.'});
    res.json(task);
};

module.exports = {
    getTasks,
    getTask, 
    addTask, 
    delTask, 
    updateTask
}