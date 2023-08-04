var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();

const PaymentService = require('../services/payment')
router.get('/id/:id', auth.ensureSignedIn, async function (req, res, next) {
        const { id } = req.params;
        const result = await PaymentService.findById(id);
        res.json(result);
})

router.post('/create', auth.ensureSignedIn, async (req, res, next) => {
        const { name,title,quantity,phonenum,} = req.body;
        const result = await PaymentService.create({  name,title,quantity,phonenum })
        res.json(result);
})
// all book
router.get('/all', async (req, res) => {
        const result = await PaymentService.findAll();
        res.json(result);
})
// router.get('/all/:category', async function (res, req){
//         const category = req.params;
//         const result = await PaymentService.findAll(category);
//         res.json(result);
// })
router.post('/update', auth.ensureSignedIn, async (req, res, next) => {
        // to do
        const { _id, name,author,price, category, desc, imageUrl } = req.body;
        const result = await PaymentService.update(_id, { name,author, price, category, desc, imageUrl });
        res.json(result);
})

router.post('/delete/', auth.ensureSignedIn, async (req, res, next) => {
        // to do
        const { _id } = req.body;
        const result = await PaymentService.remove({ _id });
        res.json(result);
})

module.exports = router