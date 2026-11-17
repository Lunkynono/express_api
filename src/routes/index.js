import express from 'express'
import userRoutes from './user.routes.js'
import authRoutes from './auth.routes.js'
import tasksRoutes from './tasks.routes.js'

const router = express.Router()

router.use('/users', userRoutes)
router.use('/auth', authRoutes)
router.use('/tasks', tasksRoutes)

export default router
