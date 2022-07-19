import express from "express";

const router = express.Router();
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/perk", (req, res, next) => {
  res.render("perk");
});

export default router;
