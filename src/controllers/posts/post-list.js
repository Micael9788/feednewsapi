const postSchema = require("../../schemas/post-schema")

class PostList {
  
   async list (req, res){
     try{
       const post = await postSchema.find({}).sort({createdAt:'desc'})
       return res.status(200).json({
         success: true, 
         post
       })
     }catch (error){
       return res.status(400).json({
         success: false,
         message: "Não foi possível obter a lista de posts"
       })
     }
   }
   
}

module.exports = new PostList()