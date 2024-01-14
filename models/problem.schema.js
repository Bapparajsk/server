const { Schema, model } = require("mongoose");

const problemSchema = new Schema({
    problemName: {
        type: String,
        required: true,
    },
    problemDetails: {
        type: String,
        required: true
    },
    testCases: [
        {
            input: {
                type: String,
                required: true
            },
            output: {
                type: String,
                required: true
            }
        }
    ]
});

const problemModel = model("peoblem", problemSchema);

module.exports = problemModel;