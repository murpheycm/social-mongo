// Imports User and Thoughts Models
const { User, Thoughts } = require('../models');


const userController = {
// GET all users
    async getUsers(req,res) {
        try {
            const users = await User.find()
                .populate({ path: "thoughts" })
                .populate({ path: "friends" });
            
            return res.status(200).json(users); 
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

// GET individual user
    async getUser(req, res) {
        try {
        const user = await User.findOne({ _id: req.params.userId })
            .populate({ path: "thoughts" })
            .populate({ path: "friends" });

            if (!user) {
                console.log(err);
                return res.status(404).json({ message: "Please check user ID" });
            }

            return res.status(200).json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

// CREATE user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            return res.status(200).json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

// UPDATE user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { 
                    _id: req.params.userId
                },
                { 
                    $set: req.body
                },
                { 
                    new: true,
                    runValidators: true
                }
            );

            if (!user) {
                return res.status(404).json({ message: "Please check the user ID you have provided" });
            }

            return res.status(200).json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

// DELETE user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });
            
            if (!user) {
                return res.status(404).json({ message: "Please check the user ID" });
            }

            await Thoughts.deleteMany({ _id: { $in: user.thoughts } });
            return res.status(200).json({message: "Deleted user!"});
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
};

// Export userController
module.exports = userController;