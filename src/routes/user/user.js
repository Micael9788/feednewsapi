const router = require('express').Router()
const authentication = require('../../middlewares/authentication')
const auth = require("../../controllers/user/auth")
const user = require("../../controllers/user/user")

router.post("/app/auth/register", auth.register)
router.post("/app/auth/login", auth.login)

router.get("/app/list/users", authentication, user.listUser)

module.exports = router
