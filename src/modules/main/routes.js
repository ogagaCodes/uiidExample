const { Router } = require("express");
const controller = require("./controllers");

const router = Router();

router.get(
  "/generate",
  controller.getUUIDController
);

module.exports = router;
