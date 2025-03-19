const mongoose = require('mongoose');

const scheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true, // ✅ Only title is unique
    },
    desc: {
        type: String,
        required: true, // ✅ Keep required, but remove unique
    },
});


const Movie = mongoose.model("Movie",scheme);
Movie.syncIndexes();
module.exports=Movie;

