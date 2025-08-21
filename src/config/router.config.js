const router = require("express").Router()

router.get ('/', (req, res, next) => {
res.json({
    data: "Health Check URL",
    message: "success",
    status: "SUCCESS",
    option: null
    })
})

router.get ('/hy', (req, res, next) => {
res.json({
    data: {title: "HELLO DEAR"},
    message: "success",
    status: "SUCCESS",
    option: null
    })    
})


module.exports= router ;
