import User from '../models/user.model.js'

export const register = async (req, res) => {
  try {
    const { email, password } = req.body
    await User.create({
      email,
      password,
    })

    res.status(201).json({ message: 'User registered' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const login = (req, res) => {
  res.json('Usuario logueado')
}
