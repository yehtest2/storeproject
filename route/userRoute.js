const express = require("express");
const router = express.Router();
const comingsoon = (req, res) => {
  res.status(200).json({ s: "haha" });
  res.end();
};
router.get("/", comingsoon).post("/", comingsoon);
module.exports = router;
