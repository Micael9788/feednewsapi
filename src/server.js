const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")
const mongoConnect = require("./database/mongo-conect")
const app = express()
require("dotenv").config()

if (process.env.DEBUG)
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({
	extended: false
}))
app.use(helmet())
app.use(cors())
app.use(require("./middlewares/check-errors"))

// rotas
app.use(require("./routes/user/user"))

const port = process.env.PORT || 3333
app.listen(port, async () => {
	try {
		await mongoConnect()
		app.emit("connected")
	} catch (error) {
		console.log(error)
	}
})

app.addListener("connected", () => {
	console.log(`Server running on port ${port}`)
})
