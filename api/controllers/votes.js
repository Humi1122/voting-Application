const Vote = require("../models/vote");

const createVote = async (req, res, next) => {
  try {
    const vote = new Vote(req.body);
    const voteCast = await vote.save();
    console.log(voteCast);
    res.status(201).json({
      message: "VoteCast Successfuly",
      vote: voteCast,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getAllVotes = async (req, res, next) => {
  try {
    const findAllVotes = await Vote.find();
    if (findAllVotes.length === 0) {
      res.status(404).json({
        message: "Not Found Any Vote",
      });
    } else {
      console.log(findAllVotes);
      res.status(302).json({
        message: "List Of All Votes",
        vote: findAllVotes,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getVoteById = async (req, res, next) => {
  try {
    const findVote = await Vote.findById(req.params.id);
    if (!findVote) {
      res.status(404).json({
        message: "Not Found Vote",
      });
    } else {
      console.log(findVote);
      res.status(302).json({
        message: "Here is Searched Vote",
        vote: findVote,
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
  createVote,
  getAllVotes,
  getVoteById,
};
