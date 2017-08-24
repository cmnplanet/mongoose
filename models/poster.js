const mongoose = require('mongoose');

const posterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    releaseYear: Number,
    styleSize: { type: String, required: true },
    castCrew: [{
        actor: { type: String },
        director: { type: String },
    }],
})

const Poster = mongoose.model('Poster', posterSchema);

module.exports = Poster;
