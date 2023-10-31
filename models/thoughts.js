const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');
const formatDate = require('../utils/format.js')

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true, 
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: (date) => formatDate(date)
        }, 
        username: { 
            type: String, 
            required: true
        },
        reactions: [Reaction],
    },
    {
      toJSON: {
        virtuals: true,
        getters: true,
      },
      id: false,
    }
);


const Thought = model('thought', thoughtSchema);

module.exports = Thought;