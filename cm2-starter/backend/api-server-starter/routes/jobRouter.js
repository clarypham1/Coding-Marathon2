//jobrouter

const express = require("express");

const {
    
    getAllJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob,

} = require("../controllers/jobControllers");

const requireAuth = require('../middleware/requireAuth');
const router = express.Router();

router.use(requireAuth);

get.router("/", getAllJobs);
get.router("/:jobId", getJobById);
get.router("/", createJob);
get.router("/:jobId", updateJob);
get.router("/:jobId", deleteJob);

module.exports = router;