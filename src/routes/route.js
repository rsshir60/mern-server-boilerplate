const express = require("express")
const router = express.Router()
const controller = require("../controllers/controller")

//------------ Test:- server is Running -----------------------
router.get("/test", controller.TestMe)


//------------ incase of wrong path -----------------------
router.all("/*", controller.Empty)

module.exports = router;


