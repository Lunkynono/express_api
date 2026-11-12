/*Este archivo nos sirve para no tener todo este código en user.routes.js
  De esa forma importamos este archivo en user.routes.js con menos código*/

export const getUser = (req, res) => {
  res.status(200).json('Todos los usuarios')
}

export const createUser = (req, res) => {
  console.log(req.body)
  res.status(201).json('Usuario creado')
}

export const updateUser = (req, res) => {
  console.log(req.params.id)

  res.status(200).json('Usuario actualizado')
}

export const deleteUser = (req, res) => {
  console.log(req.params.id)

  res.status(200).json('Usuario eliminado')
}
