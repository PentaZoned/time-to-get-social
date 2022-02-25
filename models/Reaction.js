const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {

        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: formatDate
        }
    }
);

function formatDate(date) {
    var newDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
    return newDate;
};

module.exports = reactionSchema;