const Payments = require("../models/payments");
var mongoose = require('mongoose');
const findById = async (id) => {
        try {
                return {
                        success: true,
                        data: id
                }
        } catch (err) {
                return {
                        success: false,
                        error: err || 'error'
                }
        }
        
}

const findAll = async () => {
        return await Payments.find();
        
}

const create = async (newpayment) => {
        // to do
        const createdpayment = await Payments.create(newpayment);
        return createdpayment;
}

const update = async (id, { name, }) => {
        // to do
        try {
                const update = await Payments.findByIdAndUpdate(id, { name, desc,author,price,public, category, imageUrl });
                return {
                        success: true,
                        data: update,
                        msg: "Update successfully!"
                }
        }
        catch (err) {
                return {
                        success: false,
                        success: false,
                        error: JSON.stringify(err) || 'error'
                }
        }
}

const remove = async (id) => {
        // to do
        try {
                await Payments.findByIdAndDelete(id)
                return {
                        success: true,
                        data: "Book delete successfully~"
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