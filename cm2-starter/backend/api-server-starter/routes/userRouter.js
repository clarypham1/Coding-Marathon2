//userrouter

const express = require("express");

const {
    /*getAllUsers,
    getAllUsersById,
    createUser,
    updateUser,
    deleteUser,*/
    loginUser, signupUser
} = require("../controllers/userControllers");

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', signupUser);
/*
get.router("/", getAllUsers)
get.router("/:userId", getAllUsersById)
get.router("/", createUser)
get.router("/:userId", updateUser)
get.router("/:userId", deleteUser)
*/

module.exports = router;
