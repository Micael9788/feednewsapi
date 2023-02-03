module.exports = (error, rew, res, next) => {
  if(error){
    return res.status(400).json({
			success: false,
			message: "Requisição inválida"
		})
  }
  next()
}
