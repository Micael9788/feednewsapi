const userSchema = require ("../schemas/user-schema")
const jwt = require ("jsonwebtoken")

module.exports = async (req, res, next) => {
  const {
    authorization
  } = req.headers
  
  if(!authorization){
    return res.status(401).json(
			{
				success: false,
				message: 'Usuário não autenticado'
			}
		)
  }
  
  try{
    const token = authorization.replace(
       'Bearer', ''
    ).trim()
    
    const decode = jwt.verify(
      token, process.env.TOKEN_SENHA
    )
    
    const user = await userSchema.findOne({
      _id: decode.user
    })
    
    if(!user){
      return res.status(404).json(
				{
					success: false,
					message: 'Usuário não encontrado'
				}
			)
    }
    
    req.userId = user._id
    next()
  }catch (error){
    console.log(error)
		return res.status(401).json({
			success: false,
			message: "Token de autenticação expirado ou inválido "
		})
  }
}

