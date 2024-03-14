const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ballotSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    options: {type: String , enum : ['Imran Khan', 'Nawaz Sharif', 'Bilawal Bhutto Zardari'] , required :true},
    candidate: {type: mongoose.Schema.Types.ObjectId, ref: "Candidate", required: true}
    // Add more fields as needed
}, { timestamps: true });

const Ballot = mongoose.model('Ballot', ballotSchema);

module.exports = Ballot;
