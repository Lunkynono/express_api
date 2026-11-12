import express from 'express'
import morgan from 'morgan'

const app = express()

//Middleware que afecta a todas las rutas. Transforma el texto plano que enviamos en formato JSON y lo transforma en un objeto reconocible por JavaScript
app.use(express.json())

//Middleware que muestra: acción REST realizada, tiempo de espera y código HTTP
app.use(morgan('dev'))

//Puerto en el que se abre el servidor
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hola Edem')
})

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT)
})

/*--------------Acciones sobre una lista de usuarios--------------*/

//Recibir lista de usuarios
app.get('/users', (req, res) => {
  res.status(200).json([{}])
})

//Crear usuario
app.post('/post', (req, res) => {
  console.log(req.body)

  res.status(201).json('Usuario creado')
})

//Actualizar usuario
app.put('/users/:id', (req, res) => {
  console.log(req.params.id)

  res.status(200).json('Usuario actualizado')
})

//Eliminar usuario
app.delete('/users/:id', (req, res) => {
  console.log(req.params.id)

  res.status(200).json('Usuario eliminado')
})
