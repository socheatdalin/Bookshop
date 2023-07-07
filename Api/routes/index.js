const express = require('express')
const router = express.Router();

const auth = require('../middlewares/auth');


router.use('/auth', require('./auth'));
router.use('/user', require('./user'));
router.use('/category', require('./category'));
router.use('/book', require('./book'));
// router.use('/product', require('./product'));
router.use('/price', require('./price'));


module.exports = router;