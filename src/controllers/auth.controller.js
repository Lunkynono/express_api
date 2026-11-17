import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
  console.log('Hola')
  try {
    console.log('Hola')
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({
        error: 'Email and password are required',
      })
    }

    const passwordHashed = bcrypt.hashSync(password, 10)
    const user = await User.create({
      email,
      password: passwordHashed,
    })

    res.status(201).json({
      message: 'User registered',
      data: user,
    })
  } catch (error) {
    console.log('Hola')
    res.status(500).json({ error: error.message })
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({
      error: 'Email and password are required',
    })
  }

  const user = await User.findOne({ email: email })
  if (!user) {
    return res.status(404).json({
      error: 'Invalid password or email',
    })
  }

  const passwordValid = bcrypt.compare(password, user.password)
  if (!passwordValid) {
    return res.status(404).json({
      error: 'Invalid password or email',
    })
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h',
    },
  )

  return res.status(200).json({
    message: 'User logged succesfully',
    token,
  })
}
