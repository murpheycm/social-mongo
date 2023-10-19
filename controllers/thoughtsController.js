// Imports User and THoughts Models
const { User, Thoughts } = require('../models');

// ===================Comments==============//
const thoughtsController = {
// GET all comments
    async getThoughts(req, res) {
        try {
            const thoughts = await Thoughts.find();
            return res.status(200).json(thoughts);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

// GET individual comment
    async getThought(req, res) {
        try {
            const thought = await Thoughts.findOne({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: "Please check the ID you provided" });
            }

            return res.status(200).json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

// CREATE comment
    async createThought(req, res) {
        try {
            const thought = await Thoughts.create(req.body);
            const user = await User.findByIdAndUpdate(
                req.body.userId,
                { $addToSet: { thoughts: thought._id }},
                { 
                    new: true,
                    runValidators: true 
                },
            );

            return res.status(200).json({ thought, user });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

// UPDATE comment
    async updateThought(req, res) {
        try {
            const thought = await Thoughts.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { 
                    new: true,
                    runValidators: true 
                }
            );

            if (!thought) {
                return res.status(404).json({ message: "Please check the ID you provided" });
            }

            return res.status(200).json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

// DELETE comment
    async deleteThought(req, res) {
        try {
            const thought = await Thoughts.findOneAndDelete(
                {_id: req.params.thoughtId}
            );

            if (!thought) {
                return res.status(404).json({ message: "Please check the ID you provided" });
            }

            return res.status(200).json({message: "Thought deleted"});
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

// =================Reactions================//
// Add reaction
    async addReaction(req, res) {
        try {
            const reaction = await Thoughts.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true }
            );

            if (!reaction) {
                return res.status(404).json({ message: "Please check the ID you provided" });
            }

            return res.status(200).json(reaction);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

// Remove reaction
    async deleteReaction(req, res) {
        try {
            const reaction = await Thoughts.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { _id: req.params.reactionId } } },
                { runValidators: true, new: true }
            );

            if (!reaction) {
                return res
                .status(404)
                .json({ message: "Please check the ID you provided" });
            }

            return res.status(200).json(reaction);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
};

// Exports
module.exports = thoughtsController;