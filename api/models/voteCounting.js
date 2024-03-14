const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteCountingSchema = new Schema({
    candidate: { type:mongoose.Schema.Types.ObjectId, ref: 'Candidate', required: true },
    ballot: { type: mongoose.Schema.Types.ObjectId, ref: 'Ballot', required: true },
    voteCount: { type: Number, default: 0 },
    // Add more fields as needed
}, { timestamps: true });

const VoteCounting = mongoose.model('VoteCounting', voteCountingSchema);

module.exports = VoteCounting;
