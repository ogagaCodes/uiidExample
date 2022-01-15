const { Router } = require("express");
const uuid = require("./main/routes");






module.exports = () => {
  const router = Router();

  router.use("/uuid", uuid);

  return router;
};
