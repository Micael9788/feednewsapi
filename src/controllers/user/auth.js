const userSchema = require("../../schemas/user-schema")
const {
	validateRegister,
	validateLogin
} = require ("../../validations/user-validation")
const crypto = require('crypto');
const jwt = require ("jsonwebtoken")

class Auth {

	async login (req, res) {

		let body
		try {
			body = await validateLogin.validate(
				req.body,
				{
					abortEarly: true
				}
			)
		} catch (error) {
			return res.status(400).json(
				{
					success: false,
					message: error.message
				}
			)
		}

		try {

			const user = await userSchema.findOne({
				email: body.email
			})

			if (!user) {
				return res.status(400).json({
					success: false,
					message: "Usuário não encontrado"
				})
			}

			const isPass = verifyPassword(body.password, user.password)

			if (!isPass) {
				return res.status(401).json({
					success: false,
					message: "Senha incorreta"
				})
			}

			const token = jwt.sign({
				user: user._id
			}, process.env.TOKEN_SENHA, {
				expiresIn: "7d"
			})

			return res.status(200).json({
				success: true,
				token
			})

		} catch (error) {
			return res.status(400).json({
				success: false,
				message: "Não foi possível fazer login"
			})
		}
	}

	async register (req, res) {

		let body
		try {
			body = await validateRegister.validate(
				req.body,
				{
					abortEarly: true
				}
			)
		} catch (error) {
			return res.status(400).json(
				{
					success: false,
					message: error.message
				}
			)
		}

		try {

			const userExist = await userSchema.findOne(
				{
					email: body.email
				}
			)

			if (userExist) {
				return res.status(403).json({
					success: false,
					message: "Já existe uma conta para este email"
				})
			}

			const bPass = hashPassword(body.password)

			const user = await userSchema.create({
				user: req.body.user,
        name: body.name,
        email: body.email,
        password: bPass,
        verified: body.verified,
        idade: body.idade,
        nasceu: body.nasceu,
        numero: body.numero,
        profile: body.profile,
        img: body.img,
        descricao: body.descricao,
			})

			return res.status(201).json({
				success: true,
				user
			})

		} catch (error) {
			return res.status(400).json({
				success: false,
				message: "Não foi possível fazer seu cadastro"
			})
		}
	}

}

function hashPassword(password) {
	const salt = crypto.randomBytes(16).toString('hex');
	const hash = crypto.scryptSync(password, salt, 64).toString('hex');
	return salt + ':' + hash;
}

function verifyPassword(password, original) {
	const parts = original.split(':');
	const salt = parts[0];
	const hash = crypto.scryptSync(password, salt, 64).toString('hex');
	return hash === parts[1];
}

module.exports = new Auth()