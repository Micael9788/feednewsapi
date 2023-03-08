const storeSchema = require("../../schemas/store-schema")

class StoreList {
  
   async list (req, res){
     try{
       const store = await storeSchema.find({}).sort({createdAt:'desc'})
       return res.status(200).json({
         success: true, 
         store
       })
     }catch (error){
       return res.status(400).json({
         success: false,
         message: "Não foi possível obter a lista de stores"
       })
     }
   }
   
}

module.exports = new StoreList()