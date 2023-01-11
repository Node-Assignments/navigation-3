const express = require('express')
const app = express()
const router = express.Router()
const fs = require('fs');

router.post('/file', (req, res, next) => {
    fs.writeFile('file.txt', req.body.formTxt, () => {
        res.redirect('/')
    })
})

module.exports = router