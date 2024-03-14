const Ballot = require("../models/ballot");

const createBallot = async (req, res, next) => {
  try {
    const ballot = new Ballot(req.body);
    const createBallot = await ballot.save();
    console.log(createBallot);
    res.status(201).json({
      message: "Ballot Created",
      ballot: createBallot,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getBallots = async (req, res, next) => {
  try {
    const findBallots = await Ballot.find();
    if (findBallots.length === 0) {
      res.status(404).json({
        message: "Not Found Ballot",
      });
    } else {
      console.log(findBallots);
      res.status(302).json({
        message: "List of All Ballots",
        ballot: findBallots,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getBallotById = async (req, res, next) => {
  try {
    const findOneBallot = await Ballot.findById(req.params.id);
    if (!findOneBallot) {
      res.status(404).json({
        message: "Not Found Ballot",
      });
    } else {
      console.log(findOneBallot);
      res.status(302).json({
        message: "Here is Searched Ballot",
        ballot: findOneBallot,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateBallotById = async (req, res, next) => {
  try {
    const updateBallot = await Ballot.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!updateBallot) {
      res.status(404).json({
        message: "Not Found Ballot",
      });
    } else {
      console.log(updateBallot);
      res.status(201).json({
        message: "Ballot Updates",
        ballot: updateBallot,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteBallotById = async (req, res, next) => {
  try {
    const deleteBallot = await Ballot.findOneAndDelete(req.params.id);
    if (!deleteBallot) {
      res.status(404).json({
        message: "Not Found Ballot",
      });
    } else {
      console.log(deleteBallot);
      res.status(201).json({
        message: "Ballot Deleted",
        ballot: deleteBallot,
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
  createBallot,
  getBallots,
  getBallotById,
  updateBallotById,
  deleteBallotById,
};
