const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "job",
    required: true,
  },
});

const Application = mongoose.model("application", applicationSchema);
module.exports = Application;
