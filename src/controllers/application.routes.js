const express = require("express");
const Application = require("../models/applications.model");

const app = express.Router();

app.post("/", async (req, res) => {
  try {
    const { userId, jobId } = req.body;
    const application = await Application.create({
      applicant: userId,
      profile: jobId,
    });
    res.send({
      error: false,
      application,
      message: "Application successfully.",
    });
  } catch (e) {
    res.send({ error: true, message: "something went wrong." });
  }
});

app.get("/:id", async (req, res) => {
  try {
    const applications = Application.find({ applicant: req.params.id });
    res.send({ error: false, applications });
  } catch (e) {
    res.send({ error: true });
  }
});

module.exports = app;
