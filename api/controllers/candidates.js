const Candidate = require("../models/candidate");

const createCandidate = async (req, res, next) => {
  try {
    const candidate = new Candidate({
      name: req.body.name,
      party: req.body.party,
      symbol: req.body.symbol,
    });
    const doc = await candidate.save();
    console.log(doc);
    res.status(201).json({
      message: "Candidate Registered",
      candidate: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getCandidates = async (req, res, next) => {
  try {
    const findCadidate = await Candidate.find();
    if (findCadidate.length === 0) {
      res.status(404).json({
        message: "Not Found Candidates",
      });
    } else {
      console.log(findCadidate);
      res.status(302).json({
        message: "List of All Candiates",
        candidate: findCadidate,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getCandidateById = async (req, res, next) => {
  try {
    const findOneCandidate = await Candidate.findById(req.params.id);
    if (!findOneCandidate) {
      res.status(404).json({
        message: "Not Found Candidate",
      });
    } else {
      console.log(findOneCandidate);
      res.status(302).json({
        message: "Here is Searched Candidate",
        candidate: findOneCandidate,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateCandidateById = async (req, res, next) => {
  try {
    const updateCandidate = await Candidate.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          party: req.body.party,
          symbol: req.body.symbol,
        },
      },
      { new: true }
    );
    if (!updateCandidate) {
      res.status(404).json({
        message: "Not Found Candidate",
      });
    } else {
      console.log(updateCandidate);
      res.status(201).json({
        message: "Candidate Updated",
        candidate: updateCandidate,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteCandidateById = async (req, res, next) => {
  try {
    const deleteCandidate = await Candidate.findOneAndDelete(req.params.id);
    if (!deleteCandidate) {
      res.status(404).json({
        message: "Not found Candidate",
      });
    } else {
      console.log(deleteCandidate);
      res.status(201).json({
        message: "Candidate deleted",
        candidate: deleteCandidate,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  createCandidate,
  getCandidates,
  getCandidateById,
  updateCandidateById,
  deleteCandidateById,
};
