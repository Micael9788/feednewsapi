const storeSchema = require("../../schemas/store-schema")

const {
 storeValidate 
} = require ("../../validations/store-validation")

class Store {
  async store (req, res){
    let body
    try{
      body = await storeValidate.validate(
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
      const store = await storeSchema.create({
        store_info: req.body.store_info,
        img: req.body.img,
        title: req.body.title,
        descricao: req.body.descricao,
        hora: req.body.hora,
        store_info_user: req.body.store_info_user,
        img: req.body.img,
        user: req.body.user,
        verified: req.body.verified,
      })
      
      return res.status(200).json({
				success: true,
				store
			})
      
    }catch (error){
      return res.status(400).json({
				success: false,
				message: "Não foi possível fazer seu store"
			})
    }
  }
}

module.exports = new Store()