import express from 'express'
import morgan from 'morgan'
import router from './routes/index.js'
import { log } from './middlewares/log.js'
import './cron/cron.js'
import { dbConnection } from './config/db.js'
import { error } from 'lunkynono-logger'

const app = express()

//Middleware que afecta a todas las rutas. Transforma el texto plano que enviamos en formato JSON y lo transforma en un objeto reconocible por JavaScript
app.use(express.json())

//Middleware que muestra: acción REST realizada, tiempo de espera y código HTTP
app.use(morgan('dev'))

app.use(log)

//Puerto en el que se abre el servidor
const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('Hola Edem')
})

app.use('/', router)

dbConnection()
  .then(() => {
    console.log('Database connected')
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch(error => {
    console.error('Error connecting to database', error)
  })
