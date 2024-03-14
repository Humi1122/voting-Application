const express = require("express");
const { createCandidate, getCandidates, getCandidateById, updateCandidateById, deleteCandidateById } = require("../controllers/candidates");
const router = express.Router();


router.post("/candidate", createCandidate );

router.get("/candidate",getCandidates );

router.get("/candidate/:id",getCandidateById );

router.patch("/candidate/:id",updateCandidateById );


router.delete("/candidate/:id", deleteCandidateById)


module.exports = router;