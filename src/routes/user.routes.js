import express from 'express'
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from '../controllers/user.controller.js'

const router = express.Router()

/*--------------Acciones sobre una lista de usuarios--------------*/

//Recibir lista de usuarios
router.get('/', getUser)

//Crear usuario
router.post('/', createUser)

//Actualizar usuario
router.put('/:id', updateUser)

//Eliminar usuario
router.delete('/:id', deleteUser)

//Este export con default permite redefinir con otro nombre el router en otros archivos
export default router
