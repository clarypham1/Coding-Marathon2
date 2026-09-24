const express = require("express");

const {
    
    getAllJobs,
    getAllJobsById,
    createJob,
    updateJob,
    deleteJob,

} = require("../controllers/jobControllers");

const router = express.Router();

get.router("/", getAllJobs);
get.router("/:jobId", getAllJobsById);
get.router("/", createJob);
get.router("/:jobId", updateJob);
get.router("/:jobId", deleteJob);

module.exports = router;