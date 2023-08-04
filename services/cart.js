const Cart = require('../models/cart')
const findById = async (id) => {
        // to do
        // return await Cart.findById(id);
        try {
                return {
                        success: true,
                        data: {}
                };
        } catch (err) {
                return {
                        success: false,
                        error: err || 'error'
                }
        }
}

const findAll = async () => {
        // to do
        return await Cart.find().populate('book');
}



const create = async (newCart) => {
        // to do
        const createdCate = await Cart.create(newCart);
        return createdCate;
}

const update = async (id, { book, quantity, price, total  }) => {
        // to do
        try {
                const update = await Cart.findByIdAndUpdate(id, { book, quantity, price , total });
                return {
                        success: true,
                        data: update,
                        msg: "Update successfully!"
                }
        }
        catch (err) {
                return {
                        success: false,
                        error: err
                }
        }
}

const remove = async (id) => {
        // to do
        try {
                await Cart.findByIdAndDelete(id)
                return {
                        success: true,
                        data: "Product delete successfully~"
                }
        }
        catch (err) {
                return {
                        success: false,
                        error: err
                }
        }
}

module.exports = {
        findById,
        update,
        remove,
        findAll,
        create,
     
}