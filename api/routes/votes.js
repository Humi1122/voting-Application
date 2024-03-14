const express = require("express");
const { createVote, getAllVotes, getVoteById } = require("../controllers/votes");
const router = express.Router();


router.post("/vote",createVote );

router.get("/vote", getAllVotes);

router.get("/vote/:id",getVoteById );




module.exports = router;