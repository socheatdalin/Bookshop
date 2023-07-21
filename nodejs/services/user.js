const Users = require("../models/users")

const findById = async (id) => {
        // try {
        //         const user = await Users.findById(id);
        //         return user;
        // } 
        // catch (err) {
        //         throw "User is not found"
        // }
        return await Users.findById(id);
}

const findAll = async () => {
        // to do
        // try{
        //          const users = await Users.find();
        //         return users;
        // }
        // catch(err){
        //         throw 'cannot get all users'
        // }
       return await Users.find();
}

const updatePass = async () => {
        // to do
}

const update = async () => {
        // to do
}

const remove = async () => {
        // to do
}

module.exports = {
        findById,
        updatePass,
        update,
        remove,
        findAll
}