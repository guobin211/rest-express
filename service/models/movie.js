const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const Mixed = Schema.Types.Mixed;

const movieSchema = new Schema({
    movieId: String,
    rate: Number,
    title: String,
    summary: String,
    video: String,
    poster: String,
    cover: String,

    rawTitle: String,
    movieTypes: [String],
    pubDate: Mixed,
    year: Number,

    tags: [String],

    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: {
            type: Date,
            default: Date.now()
        }
    }
});

movieSchema.pre('save', function(next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updatedAt = Date.now();
    } else {
        this.meta.updatedAt = Date.now();
    }
    next();
});

movieSchema.set('collection', 'movies');

mongoose.model('Movie', movieSchema, 'movies');
