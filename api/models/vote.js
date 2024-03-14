const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    ballot: { type: Schema.Types.ObjectId, ref: 'Ballot', required: true },
    selectedOption: { type: String, required: true },
    candidate: { type: Schema.Types.ObjectId, ref: 'Candidate', required: true },
    // Add more fields as needed
}, { timestamps: true });

const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;
