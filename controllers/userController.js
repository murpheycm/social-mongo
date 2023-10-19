// Imports User and Thoughts Models
const { User, Thoughts } = require('../models');


const userController = {
// GET all users
    async getUsers(req,res) {
        try {
            const users = await User.find()
                .populate({ path: "thoughts" })
                .populate({ path: "friends"});
            
            return res.status(200).json(users); 
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

// GET individual user



// CREATE user


// UPDATE user



// DELETE user

};

// Export
module.exports = userController;