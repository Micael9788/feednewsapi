const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
  post_info: {
  img: { type: String, required: false },
  site: { type: String, required: false },
  dia: { type: String, required: false },
  titulo: { type: String, required: false },
  descricao: { type: String, required: false },
  link: { type: String, required: false }
  },
  post_info_user: {
   img: { type: String, required: false },
   nome: { type: String, required: false },
   email: { type: String, required: false },
   sobrenome: { type: String, required: false },
   verified: { type: Boolean, required: false }
  }
  },
  {
		timestamps: true
	}
)

module.exports = mongoose.model('posts', schema)