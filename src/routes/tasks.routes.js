import express from 'express'
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from '../controllers/tasks.controller.js'
import auth from '../middlewares/auth.js'

const router = express.Router()

router.use(auth)

/*--------------Acciones sobre una lista de usuarios--------------*/

//Recibir lista de tareas
router.get('/', getTasks)

//Recibir tarea por id
router.get('/:id', getTask)

//Crear tarea
router.post('/', createTask)

//Actualizar tarea
router.put('/:id', updateTask)

//Eliminar tarea
router.delete('/:id', deleteTask)

//Este export con default permite redefinir con otro nombre el router en otros archivos
export default router
