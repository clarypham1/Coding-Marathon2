const Job = require("../models / jobModel");
const mongoose = require("mongoose");

//get
const getAllJobs = async (req, res) => {
    try {
        const user_id = req.user_id;
        const jobs = await Job.fin({ user_id }).sort({ createdAt: -1 });
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Failed" });
    }

};

//post
const createJob = async (req, res) => {
    try {
        const user_id = req.user_id;
        const newJob = await Job.create({ ...req.body, user_id });
        res.status(201).json(newJob);
    } catch {
        res.status(400).json({ message: "Failed" });
    }
};

//getbyid
const getJobById = async (req, res) => {
    const { jobId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(jobId)) {
        return res.status(400).json({ message: "Invalid" });
    }
    try {
        const user_id = req.user_id;
        const job = await Job.finById(jobId, user_id);
        if (job) {
            res.status(200).json(job);
        } else {
            res.status(404).json({ message: "job not found" });
        }

    } catch (error) {
        res.status(500).json({ message: "failed" });
    }
};

//put
const updateJob = async (req, res) => {
    const { jobId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(jobId)) {
        return res.status(400).json({ message: "invalid" });
    }
    try {
        const user_id = req.user_id;
        const updatedJob = await Job.findOneAndUpdate(
            { _id: jobId, user_id },
            { ...req.body },
            { new: true }
        );
        if (updatedJob) {
            res.status(200).json(updatedJob);
        } else {
            res.status(404).json({ message: "job not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "failed to update job" });
    }
};

//delete
const deleteJob = async (req, res) => {
    const { jobId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(jobId)) {
        return res.status(400).json({ message: "invalid" });
    }
    try {
        const user_id = req.user_id;
        const deletedJob = await Job.findOneAndDelete({ _id: jobId, user_id });
        if (deletedJob) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "job not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "failed to delete" })
    }
};

module.exports = {
    getAllJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob,
}