import mongoose from 'mongoose'

export const dbConnection = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://navpuig_db_user:YBlrtW095y5uO0EF@cluster0.rwmu5tl.mongodb.net/',
    )
  } catch (error) {
    throw new Error(`Error al conectar a al base de datos: ` + error.message)
  }
}
