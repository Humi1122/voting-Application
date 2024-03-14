const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")



const userRoutes = require("./api/routes/users");
const voteRoutes = require("./api/routes/votes");
const ballotRoutes = require("./api/routes/ballots");
const candidateRoutes = require("./api/routes/candidates");
const VoteCountingRoutes = require("./api/routes/voteCountings");

require("dotenv").config();



//require("dotenv").config();

mongoose.connect("mongodb://127.0.0.1:27017/VotingApp");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use("/users", userRoutes);
app.use("/votes", voteRoutes);
app.use("/ballots", ballotRoutes);
app.use("/candidates", candidateRoutes);
app.use("/voteCountings", VoteCountingRoutes);



app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });


module.exports= app;
