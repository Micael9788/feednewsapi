const userSchema = require("../../schemas/user-schema")

class User {
  
   async listUser (req, res){
     try{
       const users = await userSchema.find({})
       
       return res.status(200).json({
         susess: true, 
         users
       })
     }catch (error){
       return res.status(400).json({
         susess: false,
         message: "Não foi possível obter a lista de usuários"
       })
     }
   }
   
}

module.exports = new User()