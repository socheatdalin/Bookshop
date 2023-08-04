const Books = require("../models/books");
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

const findAll = async (category = ' ') => {
        return await Books.find();
        // let matchCond = {};
        // if (category) matchCond['category'] = mongoose.Types.ObjectId(category)

        // const books = await Books.aggregate([
        //         {
        //                 "$match": matchCond
        //         },
        //         {
        //                 $lookup: {
        //                         from: "categories",
        //                         localField: "category",
        //                         foreignField: "_id",
        //                         as: "category"
        //                 },
        //         },
        //         { "$unwind": "$category" },
        // ])

        // if (!books?.length)
        //         return []

        // return books
}

const create = async (newBook) => {
        // to do
        const createdBook = await Books.create(newBook);
        return createdBook;
}

const update = async (id, { name, desc,author,price,public, category, imageUrl }) => {
        // to do
        try {
                const update = await Books.findByIdAndUpdate(id, { name, desc,author,price,public, category, imageUrl });
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
                await Books.findByIdAndDelete(id)
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