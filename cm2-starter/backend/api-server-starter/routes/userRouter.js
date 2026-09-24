const express = require("express");

const {
    getAllUsers,
    getAllUsersById,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/userControllers");

const router = express.Router();

get.router("/", getAllUsers)
get.router("/:userId", getAllUsersById)
get.router("/", createUser)
get.router("/:userId", updateUser)
get.router("/:userId", deleteUser)

module.exports = router;
