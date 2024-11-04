const express = require("express")
const test = require("./controllers/user.controller")
const PORT = 4000
const app = express()


app.get("/api", test)

app.listen(PORT, () => {
    console.log("server was started on " + PORT + " port!")
})