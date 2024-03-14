const express = require("express");
const { createBallot, getBallots, getBallotById, updateBallotById, deleteBallotById } = require("../controllers/ballots");
const router = express.Router();


router.post("/ballot", createBallot);

router.get("/ballot", getBallots);


router.get("/ballot/:id", getBallotById);


router.patch("/ballot/:id", updateBallotById);


router.delete("/ballot/:id", deleteBallotById);




module.exports = router;