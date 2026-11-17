/*Este archivo nos sirve para no tener todo este código en user.routes.js
  De esa forma importamos este archivo en tasks.routes.js con menos código*/
import Task from '../models/tasks.model.js'

//Coger todas las tareas de un usuario por su id
export const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id })
  res.status(200).json(tasks)
}

//Coger una tarea de un usuario por su id
export const getTask = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, user: req.user.id })
  if (!task) return res.status(404).json({ error: 'Task not found' })

  res.status(200).json(task)
}

//Crear una tarea de un usuario por su id
export const createTask = async (req, res) => {
  const { title, description, completed } = req.body
  const task = await Task.create({
    title,
    description,
    completed: completed ?? false,
    user: req.user.id,
  })

  res.status(201).json(task)
}

//Actualizar una tarea de un usuario por su id
export const updateTask = async (req, res) => {
  const { title, description, completed } = req.body
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    { title, description, completed },
    { new: true, runValidators: true },
  )
  if (!task) return res.status(404).json({ error: 'Task not found' })

  res.status(200).json(task)
}

export const deleteTask = async (req, res) => {
  const task = await Task.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id,
  })
  if (!task) return res.status(404).json({ error: 'Task not found' })

  res.status(200).json({ message: 'Task deleted' })
}
