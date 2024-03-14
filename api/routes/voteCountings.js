const express = require("express");
const {
  createVoteCounting,
  getAllVoteCounting,
  getVoteCountingById,
  updateVoteCountingById,
  deleteVoteCountingById,
} = require("../controllers/voteCountings");
const router = express.Router();

router.post("/voteCounting", createVoteCounting);

router.get("/voteCounting", getAllVoteCounting);

router.get("/voteCounting/:id", getVoteCountingById);

router.patch("/voteCounting/:id", updateVoteCountingById);

router.delete("/voteCounting/:id", deleteVoteCountingById);

module.exports = router;
