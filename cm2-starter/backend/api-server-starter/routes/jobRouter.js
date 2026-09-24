const express = require("express");

const {
    
    getAllJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob,

} = require("../controllers/jobControllers");

const router = express.Router();

get.router("/", getAllJobs);
get.router("/:jobId", getJobById);
get.router("/", createJob);
get.router("/:jobId", updateJob);
get.router("/:jobId", deleteJob);

module.exports = router;