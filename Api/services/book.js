const Books = require("../models/books");

const findById = async (id) => {
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
  return await Books.find();
}

const create = async (newBook) => {
  // to do
  const createdBook = await Books.create(newBook);
  return createdBook;
}

const update = async () => {
  // to do
}

const remove = async () => {
  // to do
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create,
}