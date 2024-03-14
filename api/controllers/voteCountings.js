const VoteCounting = require("../models/voteCounting");

const createVoteCounting = async (req, res, next) => {
  try {
    const voteCounting = new VoteCounting(req.body);
    const doc = await voteCounting.save();
    console.log(doc);
    res.status(201).json({
      message: "Vote counting entry created successfully",
      voteCounting: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getAllVoteCounting = async (req, res, next) => {
  try {
    const findVoteCounting = await VoteCounting.find();
    if (findVoteCounting.length === 0) {
      res.status(404).json({
        message: "Vote counting entry not found",
      });
    } else {
      console.log(findVoteCounting);
      res.status(302).json({
        message: "Here is the List Of vote counting entries",
        voteCounting: findVoteCounting,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getVoteCountingById = async (req, res, next) => {
  try {
    const doc = await VoteCounting.findById(req.params.id);
    if (!doc) {
      res.status(404).json({
        message: "Vote counting entry not found",
      });
    } else {
      console.log(doc);
      res.status(302).json({
        message: "Vote counting entry found",
        voteCounting: doc,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateVoteCountingById = async (req, res, next) => {
  try {
    const updatedVoteCounting = await VoteCounting.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!updatedVoteCounting) {
      res.status(404).json({
        message: "Vote counting entry not found",
      });
    } else {
      console.log(updatedVoteCounting);
      res.status(201).json({
        message: "Vote counting entry updated successfully",
        voteCounting: updatedVoteCounting,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteVoteCountingById = async (req, res, next) => {
  try {
    const deleteVoteCounting = await VoteCounting.findOneAndDelete(
      req.params.id
    );
    if (deleteVoteCounting) {
      console.log(deleteVoteCounting);
      res.status(201).json({
        message: "Vote counting entry deleted successfully",
        voteCounting: deleteVoteCounting,
      });
    } else {
      res.status(404).json({
        message: "Vote counting entry not found",
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
  createVoteCounting,
  getAllVoteCounting,
  getVoteCountingById,
  updateVoteCountingById,
  deleteVoteCountingById,
};
