const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    dep: String,
    title: String,
    quests: [
        {
            id: Number,
            name: String,
            answers: [],
            right: Array,
            wrong: Array
        }
    ],
    timer: {
        type: Boolean,
        default: false
    },
    timerDur: {
        type: Number,
        default: 20
    },
    int: [Number, Number],
    showAnsw: {
        type: Boolean,
        default: false
    }
});

module.exports.testSchema = testSchema;