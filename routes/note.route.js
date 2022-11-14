const express = require("express")
const router = express.Router()
const{regUser, authenticateUser}=require("../controllers/note.controller")
router.post("/signup", regUser)
router.post("/login", authenticateUser)

module.exports = router;