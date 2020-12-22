const express = require('express')
const router = express.Router();

const userControllers = require('./userController');

router.post('/addCustomer',userControllers.addCustomer)
router.post('/getCustomer',userControllers.getCustomer)



module.exports = router