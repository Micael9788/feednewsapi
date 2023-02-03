const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

module.exports = async () => {
  const mongoUrl = process.env.MONGO_URL
	if (!mongoUrl)
	throw "Você precisa criar MONGO_URL no arquivo .env"
	try {
		await mongoose.connect(mongoUrl)
	} catch (error) {
		throw `Ocorreu um erro na conexão com mongodb ${error}`
	}
}
