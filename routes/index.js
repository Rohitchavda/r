var express = require("express");
var router = express.Router();
var first = require("../model/FirstSchema");

/* GET home page. */
router.post("/datastore", async function (req, res, next) {
  try {
    const savedata = await first.create(req.body);

    res.status(201).json({
      status: "success",
      savedata,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/get", async function (req, res, next) {
  try {
    const data = await data.find();

    res.status(201).json({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
