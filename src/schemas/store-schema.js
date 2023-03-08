const mongoose = require('mongoose')

const schema = new mongoose.Schema(
 {
   store_info: {
     img: { type: String, required: false },
     title: { type: String, required: false },
     descricao: { type: String, required: false },
     hora: { type: String, required: false },
   },
   store_info_user: {
     img: { type: String, required: false },
     user: { type: String, required: false },
     verified: { type: Boolean, required: false },
   }
 },
 {
	timestamps: true,
	expireAfterSeconds: 86400
 }
 )
 
 module.exports = mongoose.model('stores', schema)