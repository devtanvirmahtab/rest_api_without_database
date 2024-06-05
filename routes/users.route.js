const express = require('express');
const { getAllUser, createUser, upadteUser, deleteUser } = require('../controllers/users.controllers');
const router = express.Router();

router.get("/", getAllUser);
router.post("/", createUser);
router.put("/:id", upadteUser);
router.delete("/:id", deleteUser);

module.exports = router;