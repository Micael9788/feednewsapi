const yup = require('yup')
const storeValidate = yup.object().shape({
   store_info: yup.object().shape({
   img: yup.string().required().trim().url().max(8000),
   title: yup.string().required().trim().max(8000),
   descricao: yup.string().required().trim().max(8000),
   hora: yup.string().required().trim().max(8000),
 }),
   store_info_user: yup.object().shape({
   img: yup.string().required().trim().url().max(8000),
   user: yup.string().required().trim().max(8000),
   verified: yup.boolean().required()
   })
});

module.exports = { storeValidate } 