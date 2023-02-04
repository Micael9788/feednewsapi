const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
  user: String,
  profile: {
  name: { type: String, required: false },
  descricao: { type: String, required: false },
  img: { type: String, required: false },
  verified: { type: String, required: false }
  },
  email: String,
  password: String,
  idade: String,
  nasceu: String,
  numero: String,
  },
  {
		timestamps: true
	}
)

module.exports = mongoose.model('users', schema)