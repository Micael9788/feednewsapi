const yup = require('yup')
const postValidate = yup.object().shape({
   post_info: yup.object().shape({
   img: yup.string().required().trim().url().max(8000),
   site: yup.string().required().trim().max(8000),
   dia: yup.string().required().trim().max(8000),
   titulo: yup.string().required().trim().max(8000),
   descricao: yup.string().required().trim().max(8000),
   link: yup.string().required().trim().max(8000),
   }),
   post_info_user: yup.object().shape({
   img: yup.string().required().trim().url().max(8000),
   nome: yup.string().required().trim().max(8000),
   email: yup.string().required().trim().max(8000),
   sobrenome: yup.string().required().trim().max(8000),
   verified: yup.boolean().required()
   })
});

module.exports = { postValidate } 