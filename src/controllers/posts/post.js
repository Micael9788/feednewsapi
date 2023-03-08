const postSchema = require("../../schemas/post-schema")

const {
 postValidate 
} = require ("../../validations/post-validation")

class Post {
  async post (req, res){
    let body
    try{
      body = await postValidate.validate(
       req.body,
       {
         abortEarly: true
       }
      )
    }catch (error){
      return res.status(400).json(
        {
         success: false,
			 	 message: error.message
        }
      )
    }
    
    try{
      const post = await postSchema.create({
        post_info: req.body.post_info,
        img: req.body.img,
        site: req.body.site,
        dia: req.body.dia,
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        link: req.body.link,
        post_info_user: req.body.post_info_user,
        img: req.body.img,
        nome: req.body.nome,
        email: req.body.nome,
        sobrenome: req.body.last_nome,
        verified: req.body.verified,
      })
      
      return res.status(200).json({
				success: true,
				post
			})
      
    }catch (error){
      return res.status(400).json({
				success: false,
				message: "Não foi possível fazer seu post"
			})
    }
  }
}

module.exports = new Post()