
const Categories = require("../models/categories")

const findById = async (id) => {
        // to do
        return await Categories.findById(id);
}

const findAll = async () => {
        // to do
        return await Categories.find();
}

const findCategorizedItems = async () => {
        return await Categories.aggregate([
                {
                        $lookup: {
                                from: "books",
                                localField: "_id",
                                foreignField: "category",
                                as: "books"
                        }
                },
                {
                        $project: {
                                _id: 1,
                                name: 1,
                                desc: 1,
                                imageUrl: 1,
                                items: {
                                        _id: 1,
                                        name: 1,
                                        category: 1,
                                        desc: 1,
                                }
                        }
                }
        ])
}

const create = async (newCategory) => {
        // to do
        const createdCate = await Categories.create(newCategory);
        return createdCate;
}

const update = async (id, { name, desc, imageUrl }) => {
        // to do
        try {
                const update = await Categories.findByIdAndUpdate(id, { name, desc, imageUrl });
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
                await Categories.findByIdAndDelete(id)
                return {
                        success: true,
                        data: "Category delete successfully~"
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
        findCategorizedItems
}