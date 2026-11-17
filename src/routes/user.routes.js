import express from 'express'
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
  getUserProfile,
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

//Recuperar perfil de usuario
router.get('/profile', getUserProfile)

//Este export con default permite redefinir con otro nombre el router en otros archivos
export default router
