const router = require('express').Router()
const post = require("../../controllers/posts/post")
const postList = require("../../controllers/posts/post-list")
const authentication = require('../../middlewares/authentication')

router.post("/app/user/post", post.post)

router.get("/app/user/post-list", authentication, postList.list)

module.exports = router