const express = require('express')
const router = require('./router.config')
const app = express()

// mounting/loading
app.use("/api/v1/", router)

module.exports = app;