var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();

const bookService = require('../services/book');

router.get('/id/:id', auth.ensureSignedIn, async function (req, res, next) {
        const { id } = req.params;
        const result = await bookService.findById(id);
        res.json(result);
})

router.post('/create', auth.ensureSignedIn, async (req, res, next) => {
        const { name, desc, author, price, public, category, imageUrl } = req.body;
        const result = await bookService.create({ name, desc, author, price, public, category, imageUrl })
        res.json(result);
})
// all book
router.get('/all', async (req, res) => {
        const result = await bookService.findAll();
        res.json(result);
})
// router.get('/all/:category', async function (res, req){
//         const category = req.params;
//         const result = await bookService.findAll(category);
//         res.json(result);
// })
router.post('/update', auth.ensureSignedIn, async (req, res, next) => {
        // to do
        const { _id, name,author,price, category, desc, imageUrl } = req.body;
        const result = await bookService.update(_id, { name,author, price, category, desc, imageUrl });
        res.json(result);
})

router.post('/delete/', auth.ensureSignedIn, async (req, res, next) => {
        // to do
        const { _id } = req.body;
        const result = await bookService.remove({ _id });
        res.json(result);
})

module.exports = router