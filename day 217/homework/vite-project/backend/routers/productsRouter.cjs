const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController.cjs')

router.get('/', productsController.getProductsInfo)

module.exports = router