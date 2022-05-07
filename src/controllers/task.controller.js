import Task from '../models/Task';

export const getAllTasks = async (req, res) =>{
    const tasks =  await Task.find().lean();
     res.render('index', {tasks: tasks});
 };

export const editTask = async (req, res) =>{
    const task = await Task.findById(req.params.id).lean();
    res.render('edit', {task: task});
};

export const addTask = async (req, res) =>{
    const task = Task(req.body);
    await task.save();
    res.redirect('/'); 
};

export const updateTask = async (req, res) =>{
    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/');
};

export const deleteTask =  async (req, res) =>{
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/');
};

export const toggleDone = async (req, res) =>{
    const task = await Task.findById(req.params.id);
    task.done = !task.done;
    await task.save();
    res.redirect('/');
};