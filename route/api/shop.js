const express = require('express')
const router = express.Router()


router.get("/product", (req,res)=>{
    res.send({
       title : "redmi 17 pro",
       price : "3000",
    })
})

module.exports = router