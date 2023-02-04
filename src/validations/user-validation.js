const yup = require('yup')

// register 

const validateRegister = yup.object().shape({
  user: yup.string().required().trim().max(5000),
  profile: yup.object().shape({
  name: yup.string().required().trim().max(5000),
  descricao: yup.string().required().trim().max(5000),
  img: yup.string().required().trim().max(5000),
  verified: yup.boolean().required()
  }),
  email: yup.string().required().trim().max(5000),
  password: yup.string().required().trim().min(8).max(5000),
  idade: yup.string().required().trim().max(5000),
  nasceu: yup.string().required().trim().max(5000),
  numero: yup.string().required().trim().max(5000),
});

// login

const validateLogin = yup.object().shape({
  email: yup.string().required().trim().max(5000),
  password: yup.string().required().trim().min(8).max(5000)
})

module.exports = { 
  validateRegister,
	validateLogin
} 