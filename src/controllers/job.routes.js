const express = require("express");
const Job = require("../models/jobs.model");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    const jobs = Job.find({});
    res.send({ error: true, jobs, message: "Job fetch Successful" });
  } catch (error) {
    res.send({ error: true, message: "something went wrong" });
  }
});

app.post("/", async (req, res) => {
  try {
    const { companyName, position, contract, location } = req.body;
    const job = await Job.create({ companyName, position, contract, location });
    res.send({ error: false, job, message: "Job posted successfully." });
  } catch (e) {
    res.send({ error: true, message: "Sorry! We couldn't post the job." });
  }
});

app.patch("/:id", async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, { ...req.body });
    res.send({ error: false, job, message: "Job updated successfully." });
  } catch (e) {
    res.send({ error: true, message: "Sorry! We couldn't update the job." });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.send({ error: false, message: "Job deleted successfully" });
  } catch (error) {
    res.send({ error: true, message: "Sorry! We couldn't update the job." });
  }
});

module.exports = app;
