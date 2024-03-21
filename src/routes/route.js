const express = require("express")
const router = express.Router()
const controller = require("../controllers/controller")

//------------ Test:- server is Running -----------------------
router.get("/test", controller.TestMe)
router.post("/testpost", controller.Postreq)
router.post("/postdata", controller.PostData)
router.post("/fullname", controller.TaskArray)




//------------ incase of wrong path -----------------------
router.all("/*", controller.Empty)

module.exports = router;


