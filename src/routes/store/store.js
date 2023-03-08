const router = require('express').Router()
const authentication = require('../../middlewares/authentication')
const postStore = require("../../controllers/stores/store")
const storeList = require("../../controllers/stores/store-list")

router.post("/app/user/store", postStore.store)

router.get("/app/list/store", authentication, storeList.list)

module.exports = router